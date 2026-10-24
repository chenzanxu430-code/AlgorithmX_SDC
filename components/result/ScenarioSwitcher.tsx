'use client';

import Link from 'next/link';
import { useI18n } from '@/components/i18n/LanguageProvider';
import { fmt } from '@/lib/i18n/dict';
import type { Scenario } from '@/lib/types';

export type ScenarioSwitchError = {
  message: string;
  details: string[];
  target: Scenario;
};

type ScenarioSwitcherProps = {
  currentScenario: Scenario | null;
  isSwitching: boolean;
  pendingScenario: Scenario | null;
  error: ScenarioSwitchError | null;
  changeNote: string | null;
  saveWarning: string | null;
  legacy: boolean;
  onSelect: (scenario: Scenario) => void;
  onRetry: () => void;
};

const SCENARIO_ORDER: Scenario[] = ['slow', 'fast'];

/** 情景条：左侧说明，右侧「慢 / 快」分段开关与当前状态。 */
export function ScenarioSwitcher({
  currentScenario,
  isSwitching,
  pendingScenario,
  error,
  changeNote,
  saveWarning,
  legacy,
  onSelect,
  onRetry,
}: ScenarioSwitcherProps) {
  const { t } = useI18n();
  const s = t.result.scenario;

  const labelOf = (scenario: Scenario) => (scenario === 'slow' ? s.slow : s.fast);
  const shortOf = (scenario: Scenario) => (scenario === 'slow' ? s.shortSlow : s.shortFast);

  return (
    <section aria-label={s.title} className="glass no-print mt-4 px-4 py-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-[color:var(--ink)]">{s.title}</p>
          <p className="mt-0.5 max-w-xl text-xs leading-5 text-[color:var(--ink-muted)]">
            {s.desc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div
            role="group"
            aria-label={s.title}
            className="inline-flex rounded-full border border-[color:var(--line)] bg-[rgba(15,42,74,0.05)] p-0.5"
          >
            {SCENARIO_ORDER.map((option) => {
              const selected = currentScenario === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => onSelect(option)}
                  disabled={isSwitching || legacy}
                  aria-pressed={selected}
                  aria-label={labelOf(option)}
                  title={labelOf(option)}
                  className={`min-w-14 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    selected
                      ? 'bg-white text-[color:var(--accent)] shadow-[0_2px_10px_rgba(15,42,74,0.12)]'
                      : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]'
                  } disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  {shortOf(option)}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-[color:var(--ink-muted)]">
            {currentScenario ? fmt(s.current, { name: labelOf(currentScenario) }) : s.unknown}
          </span>
        </div>
      </div>

      {isSwitching && pendingScenario ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-3 flex items-center gap-2 rounded-xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.07)] px-3 py-2.5 text-sm text-[color:var(--accent-strong)]"
        >
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-[rgba(37,99,235,0.25)] border-t-[color:var(--accent)]"
            aria-hidden="true"
          />
          {fmt(s.switching, { name: labelOf(pendingScenario) })}
        </div>
      ) : null}

      {error ? (
        <div
          role="alert"
          className="mt-3 rounded-xl border border-[rgba(220,75,62,0.28)] bg-[rgba(220,75,62,0.06)] p-3"
        >
          <p className="text-sm font-medium text-[color:var(--coral)]">
            {fmt(s.failed, { name: labelOf(error.target) })}
          </p>
          <p className="mt-1 text-xs leading-5 text-[color:var(--coral)]">{error.message}</p>
          {error.details.length > 0 ? (
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-[color:var(--coral)]">
              {error.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}
          <button
            type="button"
            onClick={onRetry}
            disabled={isSwitching}
            className="mt-3 rounded-full border border-[rgba(220,75,62,0.35)] bg-white/80 px-3 py-1.5 text-xs font-medium text-[color:var(--coral)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {t.meta.retry}
          </button>
        </div>
      ) : null}

      {changeNote ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-3 rounded-xl border border-[rgba(37,99,235,0.20)] bg-[rgba(37,99,235,0.06)] px-3 py-2 text-sm leading-6 text-[color:var(--accent-strong)]"
        >
          {changeNote}
        </p>
      ) : null}

      {saveWarning ? (
        <p className="mt-2 text-xs text-[color:var(--amber)]">{saveWarning}</p>
      ) : null}

      {legacy ? (
        <p className="mt-3 rounded-xl border border-[color:var(--line)] bg-white/60 px-3 py-2 text-xs leading-5 text-[color:var(--ink-body)]">
          {s.legacy}
          <Link
            href="/survey"
            className="ml-1 font-medium text-[color:var(--accent)] underline-offset-2 hover:underline"
          >
            {s.reFill}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
