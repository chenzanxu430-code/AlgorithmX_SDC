'use client';

import { useI18n } from '@/components/i18n/LanguageProvider';
import { LANGS } from '@/lib/i18n/dict';

/** 中文 / EN segmented switch. */
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.meta.switchLang}
      className={`inline-flex items-center rounded-full border border-[rgba(15,42,74,0.10)] bg-white/70 p-0.5 text-[11px] font-semibold backdrop-blur ${className}`}
    >
      {LANGS.map((option) => {
        const active = lang === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={active}
            aria-label={option === 'zh' ? '中文' : 'English'}
            className={`rounded-full px-2.5 py-1 transition ${
              active
                ? 'bg-[color:var(--accent)] text-white shadow-[0_2px_8px_rgba(37,99,235,0.28)]'
                : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]'
            }`}
          >
            {t.meta[option === 'zh' ? 'langZh' : 'langEn']}
          </button>
        );
      })}
    </div>
  );
}
