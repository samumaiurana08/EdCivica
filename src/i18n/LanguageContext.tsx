import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type Lang = "it" | "en";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LangContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "site-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "it";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" ? "en" : "it";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((p) => (p === "it" ? "en" : "it")),
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};

/** Pick the value for the current language from a {it, en} dictionary. */
export function useT<T>(dict: { it: T; en: T }): T {
  const { lang } = useLang();
  return dict[lang];
}

/** Inline pick helper outside components. */
export const pick = <T,>(lang: Lang, it: T, en: T): T => (lang === "en" ? en : it);