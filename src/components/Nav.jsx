import { useEffect, useState } from "react";
import { useSectionNav } from "../hooks/useSectionNav";
import { useLang } from "../i18n/context";
import Flag from "./Flag";

const LINKS = [
  { id: "about", key: "nav.about" },
  { id: "studies", key: "nav.studies" },
  { id: "experience", key: "nav.experience" },
  { id: "career", key: "nav.career" },
];

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const goTo = useSectionNav();
  const { lang, toggle: toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a
          href="#"
          className="nav__brand"
          onClick={goTo("top")}
          aria-label={t("nav.backToTop")}
        >
          Beatriz<span className="nav__dot">.</span>
        </a>

        <nav className="nav__links" aria-label={t("nav.primary")}>
          {LINKS.map((l) => (
            <a key={l.id} href="#" onClick={goTo(l.id)}>
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="nav__tools">
          {/* The flag shows the language you're currently reading; clicking
              swaps to the other one. */}
          <button
            className="nav__lang"
            onClick={toggleLang}
            aria-label={t(lang === "pt" ? "nav.toEnglish" : "nav.toPortuguese")}
            title={t(lang === "pt" ? "nav.toEnglish" : "nav.toPortuguese")}
          >
            <Flag lang={lang} />
          </button>

          <button
            className="nav__theme"
            onClick={onToggleTheme}
            aria-label={t(theme === "dark" ? "nav.toLight" : "nav.toDark")}
            title={t(theme === "dark" ? "nav.toLight" : "nav.toDark")}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </header>
  );
}
