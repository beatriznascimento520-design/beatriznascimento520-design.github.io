import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LogoChip from "./LogoChip";
import { useLang } from "../i18n/context";
import { CAREER } from "../data/career";

/** Returns to the home page and scrolls straight back to the career timeline. */
const BACK_STATE = { scrollTo: "career" };

export default function CareerDetail() {
  const { slug } = useParams();
  const { t, pick } = useLang();
  const item = CAREER.find((e) => e.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
      <section className="section detail">
        <div className="container">
          <Link to="/" state={BACK_STATE} className="detail__back">
            {t("detail.backCareer")}
          </Link>
          <p className="section__sub">{t("detail.notFound")}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="section detail detail--brand"
      style={{ "--brand": item.brand }}
    >
      <div className="container">
        <Link to="/" state={BACK_STATE} className="detail__back">
          {t("detail.backCareer")}
        </Link>

        <LogoChip name={pick(item.company)} logo={item.logo} className="logo-chip--lg" />

        <p className="eyebrow">{pick(item.period)}</p>
        <h1 className="detail__role">{pick(item.role)}</h1>
        <p className="detail__company">{pick(item.company)}</p>
        <p className="detail__text">{pick(item.detail)}</p>

        {item.tags?.length > 0 && (
          <ul className="tags">
            {item.tags.map((tag) => (
              <li key={tag.en ?? tag}>{pick(tag)}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
