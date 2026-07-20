import Reveal from "./Reveal";
import LogoChip from "./LogoChip";
import { useLang } from "../i18n/context";
import { LANGUAGES } from "../i18n/ui";

// Ordered oldest → newest, left to right.
const EDUCATION = [
  {
    id: "cmb",
    period: "2022",
    brand: "#1464a0",
    title: {
      en: "Secondary Education — Science and Technology",
      pt: "Ensino Secundário — Ciências e Tecnologias",
    },
    place: {
      en: "Colégio Manuel Bernardes, Lisbon",
      pt: "Colégio Manuel Bernardes, Lisboa",
    },
    logo: "/logos/colegio-manuel-bernardes.png",
  },
  {
    id: "esslisboa",
    period: "2026",
    brand: "#8e1c30",
    title: {
      en: "B.Sc. Prosthetics and Orthotics",
      pt: "Licenciatura em Ortoprotesia",
    },
    place: "Escola Superior de Saúde de Lisboa",
    logo: "/logos/esslisboa.png",
    href: "https://www.essl.ipl.pt/cursos/9/plano-de-estudos",
  },
  {
    id: "isel",
    period: { en: "In progress", pt: "A decorrer" },
    brand: "#ee2722",
    title: {
      en: "M.Sc. Biomedical Engineering",
      pt: "Mestrado em Engenharia Biomédica",
    },
    place: "Instituto Superior de Engenharia de Lisboa",
    note: { en: "Currently ongoing", pt: "Atualmente a frequentar" },
    logo: "/logos/isel.png",
    href: "https://www.isel.pt/curso/10539/plano-de-estudos",
  },
];

export default function Studies() {
  const { t, pick } = useLang();

  return (
    <section id="studies" className="section section--soft">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">{t("studies.eyebrow")}</p>
          <h2 className="section__title">{t("studies.title")}</h2>
        </Reveal>

        <div className="cards cards--compact cards--three">
          {EDUCATION.map((item, i) => {
            // Entries with no `href` (the secondary school) render as a plain
            // block — no link, no call to action.
            const Body = item.href ? "a" : "div";
            const linkProps = item.href
              ? { href: item.href, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <Reveal
                key={item.id}
                className="card card--compact card--brand"
                style={{ "--brand": item.brand }}
                delay={i * 80}
              >
                <Body className="card__inner" {...linkProps}>
                  <LogoChip name={pick(item.place)} logo={item.logo} />
                  <span className="card__period">{pick(item.period)}</span>
                  <h3 className="card__role">{pick(item.title)}</h3>
                  <p className="card__company">{pick(item.place)}</p>
                  {item.note && (
                    <p className="card__detail">{pick(item.note)}</p>
                  )}
                  {item.href && (
                    <span className="card__more">{t("studies.curriculum")}</span>
                  )}
                </Body>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="certs" delay={240}>
          <h3 className="certs__title">{t("studies.languages")}</h3>
          <ul className="tags">
            {LANGUAGES.map((l) => (
              <li key={l.en}>{pick(l)}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
