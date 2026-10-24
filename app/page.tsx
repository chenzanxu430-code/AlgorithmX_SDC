'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useI18n } from '@/components/i18n/LanguageProvider';
import { fmt } from '@/lib/i18n/dict';
import { SiteHeader } from '@/components/site/SiteHeader';
import { isWorkforceTrendSnapshot, type WorkforceTrendSnapshot } from '@/lib/types';
import { loadAnalysisSession } from '@/lib/storage';

const FEATURE_ICONS = [
  // 技能画像：雷达 / 分层
  <path key="0" d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Zm0 4.6L7.6 10.5v5L12 17.9l4.4-2.4v-5L12 8.1Z" />,
  // 任务变化：柱状
  <path key="1" d="M4 19h16v1.6H4V19Zm2.2-3V9.4h2.6V16H6.2Zm4.5 0V5h2.6v11h-2.6Zm4.5 0v-4.4h2.6V16h-2.6Z" />,
  // 相邻岗位：靶心
  <path key="2" d="M12 3.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Zm0 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />,
  // 学习计划：日历
  <path key="3" d="M7 3.5h2V5h6V3.5h2V5h2.5v15.5H4.5V5H7V3.5ZM6.5 11v7.5h11V11h-11Zm2 1.8h3v3h-3v-3Z" />,
];

export default function LandingPage() {
  const { t, lang } = useI18n();
  const [hasSavedResult, setHasSavedResult] = useState(false);
  const [trendSnapshot, setTrendSnapshot] = useState<WorkforceTrendSnapshot | null>(null);
  const [trendError, setTrendError] = useState(false);

  useEffect(() => {
    setHasSavedResult(Boolean(loadAnalysisSession()));
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
        console.error('[landing] Could not load workforce trends.', error);
        setTrendError(true);
      });
  }, []);

  return (
    <>
      <SiteHeader showHome={false} />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:pt-14">
        {/* Hero */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.20)] bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-[color:var(--accent)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--accent-2)]" />
              {t.landing.eyebrow}
            </span>

            <h1 className="mt-4 text-3xl font-semibold leading-[1.18] tracking-tight text-[color:var(--ink)] sm:text-[2.6rem]">
              {t.landing.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--ink-body)] sm:text-[15px]">
              {t.landing.lead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/survey"
                className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.30)] transition hover:bg-[color:var(--accent-strong)]"
              >
                {t.landing.primaryCta}
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h11m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {hasSavedResult ? (
                <Link
                  href="/result"
                  className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-white/70 px-4 py-3 text-sm font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  {t.landing.secondaryCta}
                </Link>
              ) : null}
            </div>

            <p className="mt-3 text-[11px] text-[color:var(--ink-muted)]">{t.landing.primaryNote}</p>
          </div>

          {/* Report preview */}
          <div className="glass relative overflow-hidden p-4 sm:p-5">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.28),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[color:var(--ink)]">
                  {t.result.sections.trends}
                </p>
                {trendSnapshot ? (
                  <p className="mt-1 text-[10px] text-[color:var(--ink-muted)]">
                    {trendSnapshot.country} · {trendSnapshot.sourceFamily} · {trendSnapshot.version}
                  </p>
                ) : null}
              </div>
              {trendSnapshot ? (
                <span className="badge badge-neutral">
                  {fmt(t.result.trends.updated, { date: trendSnapshot.lastUpdated })}
                </span>
              ) : null}
            </div>
            {trendSnapshot ? (
              <ul className="mt-3 space-y-2">
                {trendSnapshot.paths.map((path) => {
                  const strongestSignal = path.skills.find((skill) => skill.changePp !== 0);
                  return (
                    <li key={path.trackId} className="glass-sub px-3 py-2.5">
                      <p className="text-[12px] font-medium text-[color:var(--ink)]">
                        {lang === 'en' ? path.toRoleEn : path.toRoleZh}
                      </p>
                      <p className="mt-1 text-[10px] leading-5 text-[color:var(--ink-muted)]">
                        {strongestSignal
                          ? fmt(t.result.trends.largestSignal, {
                              skill:
                                lang === 'en'
                                  ? strongestSignal.skillNameEn
                                  : strongestSignal.skillNameZh,
                              change: formatPp(strongestSignal.changePp, lang),
                            })
                          : t.result.trends.noChange}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[color:var(--ink-muted)]">
                        {fmt(t.result.trends.samplePair, {
                          current: path.currentSampleSize,
                          previous: path.previousSampleSize,
                        })}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-3 text-xs leading-5 text-[color:var(--ink-muted)]" role="status">
                {trendError ? t.result.trends.loadError : t.result.trends.loading}
              </p>
            )}
            {trendSnapshot ? (
              <p className="mt-3 border-t border-[color:var(--line-soft)] pt-2 text-[10px] leading-5 text-[color:var(--ink-muted)]">
                {t.result.trends.homeCaveat}
              </p>
            ) : null}
          </div>
        </section>

        {/* Features */}
        <section className="mt-14">
          <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink)]">
            {t.landing.featuresTitle}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.landing.features.map((feature, index) => (
              <article key={feature.title} className="glass print-break p-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(6,182,212,0.16),rgba(124,58,237,0.14))] text-[color:var(--accent)]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    {FEATURE_ICONS[index]}
                  </svg>
                </span>
                <h3 className="mt-3 text-sm font-semibold text-[color:var(--ink)]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-6 text-[color:var(--ink-body)]">
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold tracking-tight text-[color:var(--ink)]">
            {t.landing.stepsTitle}
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {t.landing.steps.map((step, index) => (
              <article key={step.title} className="glass-sub relative p-4">
                <span className="absolute right-3 top-3 text-2xl font-bold leading-none text-[rgba(37,99,235,0.14)] tnum">
                  {index + 1}
                </span>
                <h3 className="text-sm font-semibold text-[color:var(--ink)]">{step.title}</h3>
                <p className="mt-1.5 pr-6 text-xs leading-6 text-[color:var(--ink-body)]">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <p className="mt-8 max-w-3xl text-[11px] leading-6 text-[color:var(--ink-muted)]">
          {t.landing.footnote}
        </p>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--line-soft)] pt-5 text-[11px] text-[color:var(--ink-muted)]">
          <span>
            {t.meta.appName} · {t.meta.appTagline}
          </span>
          <span className="flex flex-wrap gap-1.5">
            {t.landing.previewList.map((item) => (
              <span key={item} className="rounded-full bg-white/60 px-2 py-0.5">
                {item}
              </span>
            ))}
          </span>
        </footer>
      </main>
    </>
  );
}

function formatPp(value: number, lang: 'zh' | 'en'): string {
  return `${value > 0 ? '+' : ''}${value}${lang === 'en' ? 'pp' : ' 个百分点'}`;
}
