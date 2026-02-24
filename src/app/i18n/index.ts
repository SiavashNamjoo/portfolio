import { fa } from "./fa";
import { en } from "./en";

export type Language = "fa" | "en";

export type TranslationKeys = typeof fa;

export const translations: Record<Language, TranslationKeys> = { fa, en };

export const languageConfig: Record<Language, { label: string; dir: "rtl" | "ltr"; htmlLang: string }> = {
  fa: { label: "فا", dir: "rtl", htmlLang: "fa" },
  en: { label: "EN", dir: "ltr", htmlLang: "en" },
};
