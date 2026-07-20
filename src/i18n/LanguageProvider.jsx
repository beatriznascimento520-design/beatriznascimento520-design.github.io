import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext, pickIn } from "./context";
import { UI } from "./ui";

const STORAGE_KEY = "lang";

function initialLang() {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "pt") return saved;
  // Portuguese visitors land on Portuguese; everyone else gets English.
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    // Keeps screen readers and browser translation prompts honest.
    document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";
  }, [lang]);

  const toggle = useCallback(
    () => setLang((l) => (l === "pt" ? "en" : "pt")),
    []
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle,
      t: (key) => UI[key]?.[lang] ?? key,
      pick: (v) => pickIn(lang, v),
    }),
    [lang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
