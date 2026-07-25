import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import LogoChip from "./LogoChip";
import { useLang } from "../i18n/context";
import { CAREER } from "../data/career";

export default function Career() {
  const { t, pick } = useLang();

  return (
    <section id="career" className="section section--soft">
      <div className="container">
        <Reveal className="section__head section__head--compact">
          <p className="eyebrow">{t("career.eyebrow")}</p>
        </Reveal>

        <ol className="timeline">
          {CAREER.map((item, i) => {
            // Entries with a slug open a detail page and render as a card; the
            // "Now" marker isn't clickable and stays a plain point.
            const Body = item.slug ? Link : "div";
            const bodyProps = item.slug
              ? { to: `/career/${item.slug}`, className: "timeline__link" }
              : { className: "timeline__plain" };

            return (
              <Reveal
                as="li"
                key={item.id}
                className="timeline__item"
                style={item.brand ? { "--brand": item.brand } : undefined}
                delay={i * 80}
              >
                <span
                  className={`timeline__dot${item.current ? " timeline__dot--current" : ""}`}
                />
                <Body {...bodyProps}>
                  {item.logo && (
                    <LogoChip name={pick(item.company)} logo={item.logo} />
                  )}
                  <span className="timeline__period">{pick(item.period)}</span>
                  <h3 className="timeline__role">{pick(item.role)}</h3>
                  {item.company && (
                    <p className="timeline__company">{pick(item.company)}</p>
                  )}
                  {/* Slugged entries keep their description for the detail page. */}
                  {item.slug ? (
                    <span className="timeline__more">{t("career.viewDetail")}</span>
                  ) : (
                    <p className="timeline__detail">{pick(item.detail)}</p>
                  )}
                </Body>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
