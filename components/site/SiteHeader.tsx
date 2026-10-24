'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { LanguageToggle } from '@/components/i18n/LanguageToggle';
import { Logo } from '@/components/site/Logo';
import { useI18n } from '@/components/i18n/LanguageProvider';

type SiteHeaderProps = {
  /** Shows the “返回首页” link. Hidden on the landing page itself. */
  showHome?: boolean;
  /** Extra actions rendered before the language switch. */
  children?: ReactNode;
};

/** Slim sticky header shared by the landing, form and report pages. */
export function SiteHeader({ showHome = true, children }: SiteHeaderProps) {
  const { t } = useI18n();

  return (
    <header className="no-print sticky top-0 z-30 border-b border-white/50 bg-white/55 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Logo />
        <div className="flex items-center gap-2">
          {children}
          {showHome ? (
            <Link
              href="/"
              className="rounded-full border border-[color:var(--line)] bg-white/70 px-3 py-1.5 text-xs font-medium text-[color:var(--ink-body)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              {t.meta.home}
            </Link>
          ) : null}
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
