// The Career timeline holds only the Mateo-Sídron internship plus the closing
// "Now" marker — see CLAUDE.md on the deliberate split from Experiences.
// Ordered oldest first; the newest point sits at the bottom of the timeline.
// Entries with a `slug` get a detail page at /career/:slug; the "Now" marker
// has none and renders as a plain, non-clickable point.
export const CAREER = [
  {
    id: "mateo-sidron",
    slug: "mateo-sidron",
    period: { en: "Sep 2025 – May 2026 · 9 months", pt: "Set 2025 – Mai 2026 · 9 meses" },
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
      en: "A nine-month internship fabricating and customising orthotic devices (braces, KAFO, DAFO, AFO), including orthoses for children with cerebral palsy and neuromuscular disorders. Selected materials and thermoformed thermoplastics for custom solutions, translated clinical assessments into functional device adjustments alongside clinicians, and applied biomechanical principles to improve posture, stability and mobility outcomes, including structural adaptation of orthotic components to enhance load distribution and functional efficiency.",
      pt: "Estágio de nove meses no fabrico e personalização de dispositivos ortóticos (ortóteses, KAFO, DAFO, AFO), incluindo ortóteses para crianças com paralisia cerebral e doenças neuromusculares. Seleção de materiais e termomoldagem de termoplásticos para soluções à medida, tradução das avaliações clínicas em ajustes funcionais dos dispositivos em conjunto com os clínicos e aplicação de princípios biomecânicos para melhorar a postura, a estabilidade e a mobilidade, incluindo a adaptação estrutural de componentes ortóticos para otimizar a distribuição de cargas e a eficiência funcional.",
    },
    tags: [
      { en: "Orthotics", pt: "Ortótese" },
      { en: "KAFO / DAFO / AFO", pt: "KAFO / DAFO / AFO" },
      { en: "Thermoforming", pt: "Termomoldagem" },
      { en: "Cerebral Palsy", pt: "Paralisia Cerebral" },
      { en: "Biomechanics", pt: "Biomecânica" },
    ],
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
