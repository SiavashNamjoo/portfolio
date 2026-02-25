import React from "react";
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { translations, languageConfig, type Language } from "../i18n";

interface LanguageContextValue {
  language: Language;
  dir: "rtl" | "ltr";
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") {
      return path;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fa" || stored === "en") return stored;
  } catch {
    // localStorage unavailable
  }
  return "fa";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const config = languageConfig[language];

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const t = useCallback(
    (key: string) => getNestedValue(translations[language] as unknown as Record<string, unknown>, key),
    [language],
  );

  useEffect(() => {
    document.documentElement.dir = config.dir;
    document.documentElement.lang = config.htmlLang;
  }, [config]);

  return (
    <LanguageContext.Provider value={{ language, dir: config.dir, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
