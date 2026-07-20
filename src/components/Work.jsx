import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import LogoChip from "./LogoChip";
import { useLang } from "../i18n/context";
import { EXPERIENCE } from "../data/experience";

export default function Work() {
  const { t, pick } = useLang();
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".card");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal className="section__head carousel__head">
          <div>
            <p className="eyebrow">{t("work.eyebrow")}</p>
            <h2 className="section__title">{t("work.title")}</h2>
          </div>

          <div className="carousel__nav">
            <button
              className="carousel__arrow"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label={t("work.prev")}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4-4.6-4.6z" />
              </svg>
            </button>
            <button
              className="carousel__arrow"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label={t("work.next")}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <div className="carousel__track" ref={trackRef} onScroll={syncEdges}>
          {EXPERIENCE.map((item) => (
            <article
              key={item.slug}
              className="card card--compact card--brand"
              style={{ "--brand": item.brand }}
            >
              <Link to={`/experience/${item.slug}`} className="card__inner">
                <LogoChip name={pick(item.company)} logo={item.logo} />
                <span className="card__period">{pick(item.period)}</span>
                <h3 className="card__role">{pick(item.role)}</h3>
                <p className="card__company">{pick(item.company)}</p>
                <p className="card__detail">{pick(item.detail)}</p>
                <span className="card__more">{t("work.readMore")}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
