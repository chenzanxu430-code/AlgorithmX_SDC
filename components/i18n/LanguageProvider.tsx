'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dictionaries, type Dict, type Lang } from '@/lib/i18n/dict';
import { createTranslator, type Translator } from '@/lib/i18n/terms';

const STORAGE_KEY = 'asn.lang';

type I18nValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  toggleLang: () => void;
  /** Copy for the active language. */
  t: Dict;
  /** Data-term translator for the active language. */
  tr: Translator;
};

const I18nContext = createContext<I18nValue | null>(null);

function readStoredLang(): Lang | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'zh' ? stored : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server render and the first client paint use Chinese; a stored preference
  // is applied right after hydration so the markup stays deterministic.
  const [lang, setLangState] = useState<Lang>('zh');

  useEffect(() => {
    const stored = readStoredLang();
    if (stored) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Language persistence is a nice-to-have; ignore private-mode failures.
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'zh' ? 'en' : 'zh')),
    [],
  );

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: dictionaries[lang],
      tr: createTranslator(lang),
    }),
    [lang, setLang, toggleLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error('useI18n must be used inside <LanguageProvider>.');
  }
  return value;
}
