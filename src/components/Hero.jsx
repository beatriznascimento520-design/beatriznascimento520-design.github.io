import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";
import { useSectionNav } from "../hooks/useSectionNav";
import { useLang } from "../i18n/context";

const EMAIL = "beatriznascimento520@gmail.com";

export default function Hero() {
  const goTo = useSectionNav();
  const { t } = useLang();
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  // Dismiss the email popover on outside click or Escape.
  useEffect(() => {
    if (!emailOpen) return;
    const onPointer = (e) => {
      if (!emailRef.current?.contains(e.target)) setEmailOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setEmailOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [emailOpen]);

  // Reopening the popover should show "Copy" again, not a stale "Copied".
  const toggleEmail = () => {
    setEmailOpen((open) => !open);
    setCopied(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="about" className="hero" aria-label={t("hero.introduction")}>
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow hero__role load load-1">
            {t("hero.role")}
          </p>
          <h1 className="hero__name load load-2">
            Beatriz
            <br />
            Nascimento
          </h1>

          <div className="hero__actions load load-4">
            {/* Row one: the two text buttons, side by side and never wrapping
                apart. Row two: the icon-only links. */}
            <span className="hero__cta-group">
              <a className="btn btn--primary" href="#" onClick={goTo("career")}>
                {t("hero.viewCareer")}
              </a>
              <a
                className="btn btn--ghost"
                href="/docs/Beatriz_Nascimento_CV.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label={t("hero.downloadCv")}
              >
                <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3.5v11m0 0 4-4m-4 4-4-4M4.5 17v2.5h15V17"
                  />
                </svg>
                {t("hero.cv")}
              </a>
            </span>

            <span className="hero__socials">
              <a
                className="btn btn--icon"
                href="https://www.linkedin.com/in/beatriz-nascimento-807389376/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <span className="hero__email" ref={emailRef}>
                <button
                  type="button"
                  className="btn btn--icon"
                  aria-label={t("hero.email")}
                  title={t("hero.email")}
                  aria-expanded={emailOpen}
                  onClick={toggleEmail}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 6.5h18v11H3zM3 7l9 6 9-6"
                    />
                  </svg>
                </button>
                {emailOpen && (
                  <span className="email-pop" role="dialog" aria-label={t("hero.emailAddress")}>
                    <span className="email-pop__address">{EMAIL}</span>
                    <button
                      type="button"
                      className="email-pop__copy"
                      onClick={copyEmail}
                    >
                      {t(copied ? "hero.copied" : "hero.copy")}
                    </button>
                  </span>
                )}
              </span>
            </span>
          </div>
        </div>

        <div className="hero__photo-wrap load load-3">
          <Photo
            className="hero__photo"
            src="/images/beatriz-capa.jpg"
            alt={t("hero.portraitAlt")}
            tone={2}
          />
          <Photo
            className="hero__photo hero__photo--accent"
            src="/images/beatriz-outdoors.jpg"
            alt={t("hero.outdoorsAlt")}
            tone={1}
          />
        </div>
      </div>
    </section>
  );
}
