'use client';

import Link from 'next/link';
import { useI18n } from '@/components/i18n/LanguageProvider';

/** Brand mark + wordmark. Links back to the landing page. */
export function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();

  return (
    <Link href="/" className="group inline-flex min-w-0 items-center gap-2.5">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 36 36" width="32" height="32" fill="none">
          <defs>
            <linearGradient id="brand-mark-gradient" x1="6" y1="28" x2="29" y2="7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" />
              <stop offset=".55" stopColor="#2563eb" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <path
            d="m6.5 24.5 7-7 5 4 11-12m-6 .5h6v6"
            stroke="url(#brand-mark-gradient)"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6.5" cy="24.5" r="2" fill="#06b6d4" />
          <circle cx="13.5" cy="17.5" r="2" fill="#168cdb" />
          <circle cx="18.5" cy="21.5" r="2" fill="#365fe6" />
          <circle cx="29.5" cy="9.5" r="2" fill="#7c3aed" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[13px] font-semibold leading-tight text-[color:var(--ink)]">
          {t.meta.appName}
        </span>
        {compact ? null : (
          <span className="mt-0.5 block truncate text-[10px] leading-tight text-[color:var(--ink-muted)]">
            {t.meta.appTagline}
          </span>
        )}
      </span>
    </Link>
  );
}
