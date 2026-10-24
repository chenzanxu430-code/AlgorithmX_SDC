'use client';

import Link from 'next/link';
import { useI18n } from '@/components/i18n/LanguageProvider';
import { fmt } from '@/lib/i18n/dict';
import {
  enrichResult,
  parseResource,
  type EnrichedGap,
  type EnrichedRole,
  type EnrichedTask,
  type ScheduledStep,
} from '@/lib/result-insights';
import type {
  AnalyzeResponse,
  Priority,
  Scenario,
  TaskChangeType,
  WorkforceTrendSnapshot,
} from '@/lib/types';

type ResultDashboardProps = {
  result: AnalyzeResponse;
  trendSnapshot?: WorkforceTrendSnapshot | null;
  trendLoadFailed?: boolean;
  weeklyStudyHours: number;
  scenario: Scenario | null;
  toolbar?: React.ReactNode;
};

const PRIORITY_TONE: Record<Priority, string> = {
  high: 'border-l-[color:var(--coral)]',
  medium: 'border-l-[color:var(--amber)]',
  low: 'border-l-[#94a3b8]',
};

const CHANGE_TONE: Record<TaskChangeType, string> = {
  automated: 'badge-high',
  augmented: 'badge-medium',
  unchanged: 'badge-low',
};

export function ResultDashboard({
  result,
  trendSnapshot,
  trendLoadFailed = false,
  weeklyStudyHours,
  scenario,
  toolbar,
}: ResultDashboardProps) {
  const { t, tr, lang } = useI18n();
  const view = enrichResult(result, weeklyStudyHours);
  const g = t.result.gaps;
  const trends = result.trendSnapshot ?? trendSnapshot;

  const scenarioName =
    scenario === 'slow'
      ? t.result.scenario.slow
      : scenario === 'fast'
        ? t.result.scenario.fast
        : null;

  const scenarioNote =
    lang === 'en' && scenarioName
      ? fmt(t.result.note.scenario, {
          name: scenarioName,
          perWeek: weeklyStudyHours,
          weeks: view.metrics.totalWeeks,
        })
      : view.scenarioNote;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-7">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
            {t.meta.appName}
          </p>
          <h1 className="mt-1.5 text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-[1.75rem]">
            {t.result.title}
          </h1>
          <p className="mt-1.5 text-sm leading-6 text-[color:var(--ink-body)]">{t.result.lead}</p>
        </div>

        <div className="no-print flex flex-wrap items-center gap-2">
          <span className="badge badge-neutral">
            {trends
              ? fmt(t.result.trends.badge, { version: trends.version })
              : t.result.sampleBadge}
          </span>
          <Link
            href="/survey"
            className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            {t.result.rerun}
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            {t.meta.print}
          </button>
        </div>
      </header>

      {toolbar}

      <div className="mt-4 space-y-4">
        {/* 技能画像 */}
        <Section
          title={t.result.sections.skills}
          badge={fmt(t.result.skills.count, { n: view.skills.length })}
        >
          {view.skills.length === 0 ? (
            <p className="text-xs text-[color:var(--ink-muted)]">{t.result.gaps.empty}</p>
          ) : (
            <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {view.skills.map((skill) => (
                <li key={skill.name} className="flex gap-2.5">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-2)]"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-[color:var(--ink)]">
                      {tr.term('skill', skill.name)}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-5 text-[color:var(--ink-muted)]">
                      {formatEvidence(skill.evidence, lang)}
                    </p>
                    <SdgContributions
                      links={skill.sdgLinks ?? []}
                      label={t.result.sdg.skillContribution}
                      compact
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Section>

        {/* 任务变化 */}
        <Section
          title={t.result.sections.tasks}
          badge={fmt(t.result.tasks.count, { n: view.tasks.length })}
        >
          <ul className="grid gap-3 lg:grid-cols-2">
            {view.tasks.map((task) => (
              <TaskRow key={task.task} task={task} />
            ))}
            {view.tasks.length === 0 && (
              <li className="text-xs text-[color:var(--ink-muted)]">{t.result.tasks.empty}</li>
            )}
          </ul>
        </Section>

        {/* 相邻岗位 */}
        <Section
          title={t.result.sections.roles}
          badge={fmt(t.result.roles.count, { n: view.roles.length })}
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {view.roles.map((role) => (
              <RoleCard key={role.title} role={role} />
            ))}
          </div>
          <p className="mt-3 text-[11px] leading-5 text-[color:var(--ink-muted)]">
            {t.result.roles.scoreNote}
          </p>
        </Section>

        {/* 技能差距 + 学习计划 */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Section title={t.result.sections.gaps} badge={fmt(g.count, { n: view.metrics.gapCount })}>
            {view.gaps.length === 0 ? (
              <p className="text-xs text-[color:var(--ink-muted)]">{g.empty}</p>
            ) : (
              <ul className="space-y-2">
                {view.gaps.map((gap) => (
                  <GapRow key={gap.skill} gap={gap} />
                ))}
              </ul>
            )}
            <p className="mt-3 text-[11px] text-[color:var(--ink-muted)]">
              {fmt(g.sortNote, { n: view.metrics.strengthCount })}
            </p>
          </Section>

          <Section
            title={t.result.sections.plan}
            badge={fmt(t.result.plan.hours, { n: view.metrics.totalHours })}
          >
            {view.plan.length === 0 ? (
              <p className="text-xs text-[color:var(--ink-muted)]">{t.result.plan.empty}</p>
            ) : (
              <ol className="space-y-2">
                {view.plan.map((step, index) => (
                  <PlanRow key={`${step.skillGap}-${index}`} step={step} index={index + 1} />
                ))}
              </ol>
            )}
            <p className="mt-3 text-[11px] text-[color:var(--ink-muted)]">
              {fmt(t.result.plan.totals, {
                hours: view.metrics.totalHours,
                perWeek: weeklyStudyHours,
                weeks: view.metrics.totalWeeks,
              })}
            </p>
          </Section>
        </div>

        <Section
          title={t.result.sections.trends}
          badge={trends?.version}
        >
          {trends ? (
            <WorkforceTrends snapshot={trends} lang={lang} />
          ) : (
            <p className="text-xs leading-5 text-[color:var(--ink-muted)]" role="status">
              {trendLoadFailed ? t.result.trends.loadFailure : t.result.trends.loading}
            </p>
          )}
        </Section>

        {/* SDG + 说明 */}
        <div className="grid gap-4 lg:grid-cols-2">
          <Section title={t.result.sections.sdg} badge={fmt(t.result.sdg.count, { n: view.sdgs.length })}>
            <ul className="space-y-3">
              {view.sdgs.map((link) => {
                const number = link.goal.match(/SDG\s*(\d+)/)?.[1] ?? 'SDG';
                const goal = tr.term('sdg', link.goal);
                return (
                  <li key={link.goal}>
                    <p className="flex items-center gap-2 text-[13px] font-semibold text-[color:var(--accent)]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[rgba(6,182,212,0.14)] text-[10px] font-bold text-[color:var(--accent-strong)] tnum">
                        {number}
                      </span>
                      {goal.replace(/^SDG\s*\d+\s*/, '')}
                    </p>
                    <p className="mt-1 pl-8 text-[11px] leading-5 text-[color:var(--ink-body)]">
                      {tr.term('sdgReason', link.goal)}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Section>

          <Section title={t.result.sections.note} badge={t.result.note.estimateLabel}>
            <p className="rounded-xl border border-[rgba(37,99,235,0.16)] bg-[rgba(37,99,235,0.05)] px-3 py-2.5 text-[12px] leading-6 text-[color:var(--ink-body)]">
              {scenarioNote}
            </p>

            <details className="group mt-3 rounded-xl border border-[color:var(--line-soft)] bg-white/60 px-3 py-2">
              <summary className="cursor-pointer list-none text-[11px] font-semibold text-[color:var(--ink-body)] transition hover:text-[color:var(--accent)]">
                <span className="inline-flex items-center gap-1">
                  <span className="transition group-open:rotate-90" aria-hidden="true">
                    ▸
                  </span>
                  {t.result.note.methodologyLabel}
                </span>
              </summary>
              <ul className="mt-2 space-y-1.5 text-[11px] leading-5 text-[color:var(--ink-muted)]">
                <li>{lang === 'en' ? t.result.note.matchFormula : view.methodology.matchFormula}</li>
                <li>{lang === 'en' ? t.result.note.priorityRule : view.methodology.priorityRule}</li>
                <li>{lang === 'en' ? t.result.note.durationRule : view.methodology.durationRule}</li>
              </ul>
              {view.methodology.sources.length > 0 && (
                <ul className="mt-2 space-y-1 border-t border-[color:var(--line-soft)] pt-2 text-[11px]">
                  {view.methodology.sources.map((source) => (
                    <li key={`${source.name}-${source.date}`} className="flex flex-wrap gap-1">
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[color:var(--accent)] underline-offset-2 hover:underline"
                        >
                          {tr.term('source', source.name)}
                        </a>
                      ) : (
                        <span className="text-[color:var(--ink-body)]">
                          {tr.term('source', source.name)}
                        </span>
                      )}
                      <span className="text-[color:var(--ink-muted)]">
                        · {source.date} · {tr.term('usedFor', source.usedFor)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          </Section>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
 * 子组件
 * ======================================================= */

function WorkforceTrends({
  snapshot,
  lang,
}: {
  snapshot: WorkforceTrendSnapshot;
  lang: 'zh' | 'en';
}) {
  const { t } = useI18n();
  const copy = t.result.trends;
  const percent = new Intl.NumberFormat(lang === 'en' ? 'en-MY' : 'zh-CN', {
    style: 'percent',
    maximumFractionDigits: 0,
  });

  return (
    <div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] leading-5 text-[color:var(--ink-muted)]">
        <p>
          {fmt(copy.scope, {
            country: snapshot.country,
            family: snapshot.jobFamily,
            population: snapshot.targetPopulation,
          })}
        </p>
        <p>
          {fmt(copy.periods, {
            current: snapshot.currentPeriod,
            previous: snapshot.previousPeriod,
          })}
        </p>
        <p>
          {fmt(copy.updated, { date: snapshot.lastUpdated })}
        </p>
        <p>
          {fmt(copy.sourceMethod, { source: snapshot.sourceFamily })}
        </p>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        {snapshot.paths.map((path) => (
          <article key={path.trackId} className="glass-sub p-3.5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-[13px] font-semibold text-[color:var(--ink)]">
                  {lang === 'en' ? path.toRoleEn : path.toRoleZh}
                </h3>
                <p className="mt-0.5 text-[10px] text-[color:var(--ink-muted)]">
                  {lang === 'en' ? path.fromRoleEn : path.fromRoleZh}
                  <span className="mx-1" aria-hidden="true">→</span>
                  {lang === 'en' ? path.toRoleEn : path.toRoleZh}
                </p>
              </div>
              <span className="badge badge-neutral">
                {fmt(copy.samplePair, {
                  current: path.currentSampleSize,
                  previous: path.previousSampleSize,
                })}
              </span>
            </div>

            <p className="mt-2 text-[11px] font-medium text-[color:var(--accent)]">
              {fmt(copy.pathScore, {
                score: path.transitionFitScore,
                change: `${path.scoreChange > 0 ? '+' : ''}${path.scoreChange}`,
              })}
            </p>
            <p className="mt-0.5 text-[10px] leading-5 text-[color:var(--ink-muted)]">
              {copy.pathScoreNote}
            </p>

            <div className="mt-2 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-[10px]">
                <thead>
                  <tr className="border-b border-[color:var(--line-soft)] text-[color:var(--ink-muted)]">
                    <th className="py-1.5 pr-2 font-medium">{copy.skill}</th>
                    <th className="px-2 py-1.5 font-medium">{copy.currentRate}</th>
                    <th className="px-2 py-1.5 font-medium">{copy.previousRate}</th>
                    <th className="px-2 py-1.5 font-medium">{copy.change}</th>
                  </tr>
                </thead>
                <tbody>
                  {path.skills.map((skill) => (
                    <tr key={skill.skillId} className="border-b border-[color:var(--line-soft)] last:border-0">
                      <td className="py-1.5 pr-2 text-[color:var(--ink)]">
                        {lang === 'en' ? skill.skillNameEn : skill.skillNameZh}
                      </td>
                      <td className="px-2 py-1.5 text-[color:var(--ink-body)]">
                        {percent.format(skill.currentRate)}
                      </td>
                      <td className="px-2 py-1.5 text-[color:var(--ink-body)]">
                        {percent.format(skill.previousRate)}
                      </td>
                      <td className="px-2 py-1.5">
                        <span
                          className={
                            skill.changePp > 0
                              ? 'text-[color:var(--green)]'
                              : skill.changePp < 0
                                ? 'text-[color:var(--coral)]'
                                : 'text-[color:var(--ink-muted)]'
                          }
                        >
                          {formatPercentagePoints(skill.changePp, lang)} ·{' '}
                          {getTrendLabel(copy, skill.trend)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-[rgba(220,75,62,0.16)] bg-[rgba(220,75,62,0.04)] px-3 py-2.5">
        <p className="text-[11px] font-semibold text-[color:var(--ink)]">{copy.limitations}</p>
        <p className="mt-1 text-[11px] leading-5 text-[color:var(--ink-body)]">
          {copy.sampleWarning}
        </p>
      </div>
    </div>
  );
}

function getTrendLabel(
  copy: ReturnType<typeof useI18n>['t']['result']['trends'],
  trend: string,
): string {
  switch (trend) {
    case 'up':
      return copy.up;
    case 'down':
      return copy.down;
    case 'changing':
      return copy.changing;
    default:
      return copy.insufficient;
  }
}

function formatPercentagePoints(value: number, lang: 'zh' | 'en'): string {
  return `${value > 0 ? '+' : ''}${value}${lang === 'en' ? 'pp' : ' 个百分点'}`;
}

function Section({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="glass print-break p-4 sm:p-5">
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-[15px] font-semibold text-[color:var(--ink)]">{title}</h2>
          {badge ? <span className="badge badge-neutral">{badge}</span> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function TaskRow({ task }: { task: EnrichedTask }) {
  const { t, tr } = useI18n();
  const labels = t.result.tasks;

  return (
    <li className="glass-sub p-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[13px] font-medium text-[color:var(--ink)]">{task.task}</p>
        <span className={`badge ${CHANGE_TONE[task.changeType]}`}>{labels[task.changeType]}</span>
      </div>
      <a
        href={task.source.url}
        target="_blank"
        rel="noreferrer"
        className="mt-1 inline-flex items-center gap-1 text-[11px] text-[color:var(--ink-muted)] underline-offset-2 transition hover:text-[color:var(--accent)] hover:underline"
      >
        {tr.term('source', task.source.name)} · {task.source.date}
        <span aria-hidden="true">↗</span>
      </a>

      <div className="mt-2.5 space-y-1.5">
        <Meter label={labels.aiImpact} value={task.aiImpact} color="var(--accent)" />
        <Meter label={labels.humanJudgment} value={task.humanJudgment} color="var(--amber)" />
      </div>
    </li>
  );
}

function Meter({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-[60px] shrink-0 text-[11px] text-[color:var(--ink-muted)]">{label}</span>
      <div
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(15,42,74,0.08)]"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: color }} />
      </div>
      <span className="w-8 shrink-0 text-right text-[11px] font-semibold text-[color:var(--ink-body)] tnum">
        {value}%
      </span>
    </div>
  );
}

function RoleCard({ role }: { role: EnrichedRole }) {
  const { t, tr, lang } = useI18n();
  const r = t.result.roles;

  const matched = tr.terms('skill', role.matchedSkills);
  const missing = tr.terms('skill', role.missingSkills);

  const lines: string[] = [];
  lines.push(
    role.matchedSkills.length > 0
      ? fmt(r.coreHit, {
          hit: role.matchedSkills.length,
          total: role.requiredCount,
          skills: tr.join(matched),
        })
      : r.coreHitNone,
  );
  lines.push(
    role.interestMatches?.length
      ? fmt(r.interestHit, { skills: tr.join(tr.terms('interest', role.interestMatches)) })
      : r.interestNone,
  );
  lines.push(
    role.missingSkills.length > 0 ? fmt(r.fillGap, { skills: tr.join(missing) }) : r.noGap,
  );

  const experience = parseExperienceReason(role.reasons);
  if (experience) {
    const fit = experience.fit;
    lines.push(
      fmt(r.experience[fit], { years: experience.years, ideal: experience.ideal }) +
        (experience.roleName ? ` ${fmt(r.experience.roleSuffix, { name: experience.roleName })}` : ''),
    );
  }

  const basis = parseBasis(role.reasons);
  const extras = role.reasons.filter((reason) => !isStructuredReason(reason));

  return (
    <article className="glass-sub flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[13px] font-semibold leading-5 text-[color:var(--ink)]">
          {tr.term('role', role.title)}
        </h3>
        <p className="shrink-0 text-right leading-none">
          <span className="text-2xl font-semibold tracking-tight text-[color:var(--accent)] tnum">
            {role.matchScore}
          </span>
          <span className="ml-1 text-[10px] text-[color:var(--ink-muted)]">{r.score}</span>
        </p>
      </div>

      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-[rgba(15,42,74,0.08)]"
        role="progressbar"
        aria-label={tr.term('role', role.title)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={role.matchScore}
      >
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--accent-2),var(--accent))]"
          style={{ width: `${role.matchScore}%` }}
        />
      </div>

      <ul className="mt-2.5 space-y-1">
        {lines.map((line) => (
          <li key={line} className="text-[11px] leading-5 text-[color:var(--ink-body)]">
            {line}
          </li>
        ))}
        {extras.map((reason) => (
          <li key={reason} className="text-[11px] leading-5 text-[color:var(--ink-body)]">
            {reason}
          </li>
        ))}
        {basis ? (
          <li className="text-[11px] leading-5 text-[color:var(--ink-muted)]">
            {r.basis}
            <a
              href={basis.url || undefined}
              target={basis.url ? '_blank' : undefined}
              rel={basis.url ? 'noreferrer' : undefined}
              className="underline-offset-2 hover:underline"
            >
              {tr.term('source', basis.name)}
              {lang === 'en' ? ` (${basis.date})` : `（${basis.date}）`}
            </a>
          </li>
        ) : null}
      </ul>

      <SdgContributions
        links={role.sdgLinks ?? []}
        label={t.result.sdg.roleContribution}
      />

      <div className="mt-auto space-y-1.5 border-t border-[color:var(--line-soft)] pt-2.5">
        <ChipRow title={r.matchedTitle} items={matched} tone="matched" />
        <ChipRow title={r.missingTitle} items={missing} tone="missing" />
      </div>
    </article>
  );
}

function ChipRow({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'matched' | 'missing';
}) {
  const { t } = useI18n();
  const palette =
    tone === 'matched'
      ? 'border-[rgba(37,99,235,0.22)] bg-[rgba(37,99,235,0.08)] text-[color:var(--accent-strong)]'
      : 'border-[rgba(220,75,62,0.22)] bg-[rgba(220,75,62,0.07)] text-[color:var(--coral)]';

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-[10px] font-medium text-[color:var(--ink-muted)]">{title}</span>
      {items.length > 0 ? (
        items.map((item) => (
          <span key={item} className={`rounded-full border px-2 py-0.5 text-[10px] ${palette}`}>
            {item}
          </span>
        ))
      ) : (
        <span className="text-[10px] text-[color:var(--ink-muted)]">—</span>
      )}
      <span className="sr-only">{t.result.sections.roles}</span>
    </div>
  );
}

function GapRow({ gap }: { gap: EnrichedGap }) {
  const { t, tr } = useI18n();
  const g = t.result.gaps;

  return (
    <li
      className={`flex items-center justify-between gap-2 rounded-xl border border-[color:var(--line-soft)] border-l-[3px] bg-white/70 px-3 py-2 ${
        gap.status === 'gap' ? PRIORITY_TONE[gap.priority] : 'border-l-[color:var(--green)]'
      }`}
    >
      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium text-[color:var(--ink)]">
          {tr.term('skill', gap.skill)}
        </p>
        <p className="text-[11px] text-[color:var(--ink-muted)]">
          {gap.status === 'gap' ? g.gap : g.strength}
          {typeof gap.neededBy === 'number' ? ` · ${fmt(t.result.skills.neededBy, { n: gap.neededBy })}` : ''}
        </p>
        <SdgContributions
          links={gap.sdgLinks ?? []}
          label={t.result.sdg.skillContribution}
          compact
        />
      </div>
      <span className={`badge badge-${gap.priority}`}>{g[gap.priority]}</span>
    </li>
  );
}

function SdgContributions({
  links,
  label,
  compact = false,
}: {
  links: AnalyzeResponse['sdgLinks'];
  label: string;
  compact?: boolean;
}) {
  const { t, tr, lang } = useI18n();

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={`${compact ? 'mt-1' : 'mt-2.5 rounded-lg bg-white/55 p-2.5'}`}>
      <p className="text-[10px] font-semibold text-[color:var(--accent-strong)]">{label}</p>
      <ul className={compact ? 'mt-0.5 space-y-0.5' : 'mt-1.5 space-y-1.5'}>
        {links.map((link) => (
          <li key={`${link.goal}-${link.reason}`} className="text-[10px] leading-4 text-[color:var(--ink-body)]">
            <span className="font-medium text-[color:var(--accent)]">{tr.term('sdg', link.goal)}</span>
            <span> · {lang === 'en' && link.reasonEn ? link.reasonEn : link.reason}</span>
          </li>
        ))}
      </ul>
      {!compact && (
        <p className="mt-1.5 text-[10px] leading-4 text-[color:var(--ink-muted)]">
          {t.result.sdg.contributionNote}
        </p>
      )}
    </div>
  );
}

function PlanRow({ step, index }: { step: ScheduledStep; index: number }) {
  const { t, tr } = useI18n();
  const resource = parseResource(step.resource);
  const resourceTitle = tr.term('resource', resource.title);
  const provider = resource.provider ? tr.term('provider', resource.provider) : '';
  const skill = tr.term('skill', step.skillGap);
  const title = resourceTitle
    ? fmt(t.result.plan.stepTitle, { resource: resourceTitle, skill })
    : fmt(t.result.plan.stepTitleNoResource, { skill });

  return (
    <li className="flex gap-2.5 rounded-xl bg-white/60 px-3 py-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(37,99,235,0.12)] text-[10px] font-bold text-[color:var(--accent-strong)] tnum">
        {index}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium leading-5 text-[color:var(--ink)]">{title}</p>
        <p className="text-[11px] text-[color:var(--ink-muted)]">
          {fmt(t.result.plan.hoursValue, { n: step.estimatedHours })}
          {step.weekStart && step.weekEnd
            ? ` · ${fmt(t.result.plan.weekRange, { a: step.weekStart, b: step.weekEnd })}`
            : ''}
        </p>
        <a
          href={step.resource.url}
          target="_blank"
          rel="noreferrer"
          className="mt-0.5 inline-flex flex-wrap items-center gap-1 text-[11px] text-[color:var(--accent)] underline-offset-2 hover:underline"
        >
          {resourceTitle}
          {provider ? <span className="text-[color:var(--ink-muted)]">· {provider}</span> : null}
          {resource.publishedAt ? (
            <span className="text-[color:var(--ink-muted)]">({resource.publishedAt})</span>
          ) : null}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </li>
  );
}

/* =========================================================
 * 辅助
 * ======================================================= */

const STRUCTURED_PREFIXES = [
  '核心技能命中',
  '兴趣方向命中',
  '兴趣方向暂无',
  '待补：',
  '待补足：',
  '岗位所需技能已全部覆盖',
  '需求依据',
];

function isStructuredReason(reason: string): boolean {
  return (
    STRUCTURED_PREFIXES.some((prefix) => reason.startsWith(prefix)) ||
    parseExperienceReason([reason]) !== null
  );
}

/** 规则引擎的经验适配句：`3 年经验，…（岗位参考 2 年）[；当前岗位「X」方向接近]。` */
function parseExperienceReason(
  reasons: string[],
): { years: number; ideal: number; fit: 'close' | 'higher' | 'lower'; roleName: string } | null {
  for (const reason of reasons) {
    const match = reason.match(
      /^(\d+)\s*年经验，(经验年限与岗位通常要求接近|经验年限高于该岗位通常要求|经验年限低于该岗位通常要求)（岗位参考\s*(\d+)\s*年）(?:；当前岗位「(.+?)」方向接近)?。?$/,
    );
    if (!match) {
      continue;
    }
    const fit =
      match[2] === '经验年限与岗位通常要求接近'
        ? 'close'
        : match[2] === '经验年限高于该岗位通常要求'
          ? 'higher'
          : 'lower';
    return {
      years: Number(match[1]),
      ideal: Number(match[3]),
      fit,
      roleName: match[4] ?? '',
    };
  }
  return null;
}

/** 从 `需求依据：名称（2025-01-07）…` 中取出名称与日期。 */
function parseBasis(reasons: string[]): { name: string; date: string; url: string } | null {
  for (const reason of reasons) {
    const match = reason.match(/需求依据：(.+?)（(\d{4}-\d{2}-\d{2})）\s*(https?:\/\/\S+)?/);
    if (match) {
      return { name: match[1], date: match[2], url: match[3] ?? '' };
    }
  }
  return null;
}

/** 技能证据由 `任务「…」` / `自评技能「…」` 片段组成，英文界面改成对应写法。 */
function formatEvidence(evidence: string, lang: 'zh' | 'en'): string {
  if (lang === 'zh') {
    return evidence;
  }

  return evidence
    .split('；')
    .map((segment) => {
      const task = segment.match(/^任务「(.*)」$/);
      if (task) {
        return `Task “${task[1]}”`;
      }
      const skill = segment.match(/^自评技能「(.*)」$/);
      if (skill) {
        return `Self-declared “${skill[1]}”`;
      }
      return segment;
    })
    .join(' · ');
}
