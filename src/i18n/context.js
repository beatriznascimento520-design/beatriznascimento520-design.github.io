import { createContext, useContext } from "react";

export const LanguageContext = createContext(null);

/**
 * `lang`   — "en" | "pt"
 * `toggle` — flips between the two
 * `t(key)` — interface string from src/i18n/ui.js
 * `pick(v)`— unwraps a bilingual content field. Accepts a plain value too, so
 *            entries that read the same in both languages (proper nouns,
 *            years) can stay as bare strings.
 */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

export function pickIn(lang, value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] ?? value.en;
  }
  return value;
}
