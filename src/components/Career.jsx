import Reveal from "./Reveal";
import LogoChip from "./LogoChip";
import { useLang } from "../i18n/context";

// Oldest first — the newest point sits at the bottom of the timeline.
const CAREER = [
  {
    id: "mateo-sidron",
    period: { en: "Sep 2025 – May 2026", pt: "Set 2025 – Mai 2026" },
    role: {
      en: "Prosthetics & Orthotics Intern",
      pt: "Estagiária de Ortoprotesia",
    },
    company: {
      en: "Ortopedia Técnica Mateo-Sídron · Cádiz, Spain",
      pt: "Ortopedia Técnica Mateo-Sídron · Cádis, Espanha",
    },
    brand: "#ed1c24",
    logo: "/logos/mateo-sidron.png",
    detail: {
      en: "Fabricated and customised orthotic devices (braces, KAFO, DAFO, AFO), including orthoses for children with cerebral palsy and neuromuscular disorders. Selected materials and thermoformed thermoplastics for custom solutions, translated clinical assessments into functional device adjustments alongside clinicians, and applied biomechanical principles to improve posture, stability and mobility outcomes.",
      pt: "Fabrico e personalização de dispositivos ortóticos (ortóteses, KAFO, DAFO, AFO), incluindo ortóteses para crianças com paralisia cerebral e doenças neuromusculares. Seleção de materiais e termomoldagem de termoplásticos para soluções à medida, tradução das avaliações clínicas em ajustes funcionais dos dispositivos em conjunto com os clínicos e aplicação de princípios biomecânicos para melhorar a postura, a estabilidade e a mobilidade.",
    },
  },
  {
    id: "now",
    period: { en: "Now", pt: "Agora" },
    role: { en: "Back to studying", pt: "De volta aos estudos" },
    detail: {
      en: "Focused on the M.Sc. in Biomedical Engineering at ISEL, building on the clinical side of the work.",
      pt: "Focada no Mestrado em Engenharia Biomédica no ISEL, a aprofundar a vertente clínica do trabalho.",
    },
    current: true,
  },
];

export default function Career() {
  const { t, pick } = useLang();

  return (
    <section id="career" className="section section--soft">
      <div className="container">
        <Reveal className="section__head section__head--compact">
          <p className="eyebrow">{t("career.eyebrow")}</p>
        </Reveal>

        <ol className="timeline">
          {CAREER.map((item, i) => (
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
              {item.logo && (
                <LogoChip name={pick(item.company)} logo={item.logo} />
              )}
              <span className="timeline__period">{pick(item.period)}</span>
              <h3 className="timeline__role">{pick(item.role)}</h3>
              {item.company && (
                <p className="timeline__company">{pick(item.company)}</p>
              )}
              <p className="timeline__detail">{pick(item.detail)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
