'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/components/i18n/LanguageProvider';
import { ResultDashboard } from '@/components/result/ResultDashboard';
import {
  ScenarioSwitcher,
  type ScenarioSwitchError,
} from '@/components/result/ScenarioSwitcher';
import { SiteHeader } from '@/components/site/SiteHeader';
import { AnalysisRequestError, requestAnalysis } from '@/lib/analyze-client';
import { fmt } from '@/lib/i18n/dict';
import { createTranslator } from '@/lib/i18n/terms';
import { loadAnalysisSession, saveAnalysisSession, type AnalysisSession } from '@/lib/storage';
import {
  isWorkforceTrendSnapshot,
  type AnalyzeResponse,
  type Scenario,
  type WorkforceTrendSnapshot,
} from '@/lib/types';

export function ResultPageClient() {
  const { t, lang } = useI18n();
  const switchingRef = useRef(false);
  const [session, setSession] = useState<AnalysisSession | null>(null);
  const [trendSnapshot, setTrendSnapshot] = useState<WorkforceTrendSnapshot | null>(null);
  const [trendLoadFailed, setTrendLoadFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);
  const [pendingScenario, setPendingScenario] = useState<Scenario | null>(null);
  const [switchError, setSwitchError] = useState<ScenarioSwitchError | null>(null);
  const [failedScenario, setFailedScenario] = useState<Scenario | null>(null);
  const [lastSwitch, setLastSwitch] = useState<{
    previous: AnalyzeResponse;
    next: AnalyzeResponse;
    scenario: Scenario;
  } | null>(null);
  const [saveWarning, setSaveWarning] = useState<string | null>(null);

  useEffect(() => {
    const savedSession = loadAnalysisSession();
    setSession(savedSession);
    if (savedSession && !savedSession.result.trendSnapshot) {
      void fetch('/api/trends')
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`Trend request failed with status ${response.status}`);
          }
          const data: unknown = await response.json();
          if (!isWorkforceTrendSnapshot(data)) {
            throw new Error('Trend response did not match the expected schema');
          }
          setTrendSnapshot(data);
        })
        .catch((error: unknown) => {
          console.error('[result] Could not load workforce trends.', error);
          setTrendLoadFailed(true);
        });
    }
    setIsLoading(false);
  }, []);

  // 提示文案按当前语言即时重建，切换语言后不会停留在旧语言
  const changeNote = lastSwitch
    ? buildChangeNote(lastSwitch.previous, lastSwitch.next, lastSwitch.scenario, t, lang)
    : null;

  async function switchScenario(nextScenario: Scenario) {
    const previousSession = session;

    if (!previousSession?.input || switchingRef.current) {
      return;
    }
    if (nextScenario === previousSession.input.scenario) {
      return;
    }

    const input = previousSession.input;
    switchingRef.current = true;
    setIsSwitching(true);
    setPendingScenario(nextScenario);
    setSwitchError(null);
    setFailedScenario(null);
    setLastSwitch(null);
    setSaveWarning(null);

    try {
      const nextResult = await requestAnalysis({
        ...input,
        scenario: nextScenario,
      });
      const mergedResult = preserveTaskSources(previousSession.result, nextResult);
      const nextSession: AnalysisSession = {
        result: mergedResult,
        input: { ...input, scenario: nextScenario },
        savedAt: new Date().toISOString(),
      };

      setSession(nextSession);
      setLastSwitch({ previous: previousSession.result, next: mergedResult, scenario: nextScenario });

      try {
        saveAnalysisSession(nextSession);
      } catch {
        setSaveWarning(t.result.scenario.saveWarning);
      }
    } catch (error) {
      const message =
        error instanceof AnalysisRequestError
          ? error.message
          : t.survey.errors.requestFailed;
      const details = error instanceof AnalysisRequestError ? error.details : [];

      setSwitchError({ message, details, target: nextScenario });
      setFailedScenario(nextScenario);
    } finally {
      switchingRef.current = false;
      setIsSwitching(false);
      setPendingScenario(null);
    }
  }

  if (isLoading) {
    return (
      <>
        <SiteHeader />
        <main className="mx-auto w-full max-w-3xl px-4 py-20">
          <div className="glass p-8 text-center">
            <div
              className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-[rgba(37,99,235,0.2)] border-t-[color:var(--accent)]"
              aria-hidden="true"
            />
            <p
              className="mt-3 text-sm text-[color:var(--ink-muted)]"
              role="status"
              aria-live="polite"
            >
              {t.result.loading}
            </p>
          </div>
        </main>
      </>
    );
  }

  if (!session) {
    return (
      <>
        <SiteHeader />
        <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:py-24">
          <section className="glass p-8 text-center sm:p-10">
            <p className="text-sm font-medium text-[color:var(--accent)]">{t.meta.appName}</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--ink)]">
              {t.result.empty.title}
            </h1>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[color:var(--ink-body)]">
              {t.result.empty.desc}
            </p>
            <Link
              href="/survey"
              className="mt-6 inline-flex rounded-lg bg-[color:var(--accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.26)] transition hover:bg-[color:var(--accent-strong)]"
            >
              {t.result.empty.cta}
            </Link>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <ResultDashboard
        result={session.result}
        trendSnapshot={trendSnapshot}
        trendLoadFailed={trendLoadFailed}
        weeklyStudyHours={session.input?.weeklyStudyHours ?? 8}
        scenario={session.input?.scenario ?? null}
        toolbar={
          <ScenarioSwitcher
            currentScenario={session.input?.scenario ?? null}
            isSwitching={isSwitching}
            pendingScenario={pendingScenario}
            error={switchError}
            changeNote={changeNote}
            saveWarning={saveWarning}
            legacy={!session.input}
            onSelect={switchScenario}
            onRetry={() => {
              if (failedScenario) {
                void switchScenario(failedScenario);
              }
            }}
          />
        }
      />
    </>
  );
}

function preserveTaskSources(previous: AnalyzeResponse, next: AnalyzeResponse): AnalyzeResponse {
  const previousSources = new Map(
    previous.taskChanges.map((item) => [item.task, item.source] as const),
  );

  return {
    ...next,
    taskChanges: next.taskChanges.map((item) => ({
      ...item,
      source: previousSources.get(item.task) ?? item.source,
    })),
  };
}

type ChangeCopy = ReturnType<typeof useI18n>['t']['result']['change'];

function buildChangeNote(
  previous: AnalyzeResponse,
  next: AnalyzeResponse,
  scenario: Scenario,
  t: ReturnType<typeof useI18n>['t'],
  lang: 'zh' | 'en',
): string {
  const tr = createTranslator(lang);
  const copy: ChangeCopy = t.result.change;

  const rolesChanged =
    previous.recommendedRoles.map((role) => role.title).join('|') !==
    next.recommendedRoles.map((role) => role.title).join('|');
  const planChanged =
    previous.learningPlan.map((step) => step.skillGap).join('|') !==
    next.learningPlan.map((step) => step.skillGap).join('|');

  let summary: string;
  if (rolesChanged && planChanged) {
    summary = copy.rolesAndPlan;
  } else if (rolesChanged) {
    summary = copy.rolesOnly;
  } else if (planChanged) {
    summary = copy.planOnly;
  } else {
    summary = copy.none;
  }

  const topRole = next.recommendedRoles[0]?.title;
  const firstStep = next.learningPlan[0]?.skillGap;
  const details = [
    topRole ? fmt(copy.topRole, { name: tr.term('role', topRole) }) : '',
    firstStep ? fmt(copy.firstStep, { name: tr.term('skill', firstStep) }) : '',
  ]
    .filter(Boolean)
    .join(lang === 'en' ? '; ' : '；');

  const label = scenario === 'fast' ? t.result.scenario.fast : t.result.scenario.slow;

  return `${fmt(copy.scenarioLabel, { name: label })}${summary}${details ? (lang === 'en' ? ` ${details}. ` : `${details}。`) : ''}${copy.keepSources}`;
}
