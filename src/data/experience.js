// Ordered oldest → newest; the carousel renders them left to right.
// Text fields carry both languages; see src/i18n/context.js `pick`.
export const EXPERIENCE = [
  {
    slug: "project-in",
    brand: "#dc0078",
    period: "2022",
    role: { en: "Mentor", pt: "Mentora" },
    company: "Project IN",
    logo: "/logos/project-in.png",
    detail: {
      en: "Supported learning development through individualized guidance and mentoring.",
      pt: "Apoio do desenvolvimento da aprendizagem através de acompanhamento individualizado e mentoria.",
    },
    tags: [
      { en: "Mentoring", pt: "Mentoria" },
      { en: "Volunteering", pt: "Voluntariado" },
    ],
  },
  {
    slug: "siorto-internship",
    brand: "#0d7f96",
    period: { en: "May 2025 · 1 week", pt: "Mai 2025 · 1 semana" },
    role: { en: "Student Internship", pt: "Estágio Curricular" },
    company: { en: "SIORTO · Lisbon, Portugal", pt: "SIORTO · Lisboa, Portugal" },
    logo: "/logos/siorto.png",
    detail: {
      en: "Used 3D scanning systems for accurate residual limb modelling and manufactured prosthetic sockets with additive manufacturing. Worked across prosthetic alignment, suspension systems and pressure management, integrated clinical data into the device development process, and supported patients through post-fitting adaptation and functional training.",
      pt: "Utilização de sistemas de digitalização 3D para modelação rigorosa do coto e fabrico de encaixes protésicos por manufatura aditiva. Trabalho em alinhamento protésico, sistemas de suspensão e gestão de pressões, integração de dados clínicos no processo de desenvolvimento do dispositivo e apoio aos utentes na adaptação pós-colocação e no treino funcional.",
    },
    tags: [
      { en: "Prosthetics", pt: "Prótese" },
      { en: "3D Scanning", pt: "Digitalização 3D" },
      { en: "3D Printing", pt: "Impressão 3D" },
      { en: "Alignment", pt: "Alinhamento" },
    ],
  },
  {
    slug: "super-ajudas-internship",
    brand: "#7d8c22",
    period: { en: "May 2025 · 1 week", pt: "Mai 2025 · 1 semana" },
    role: { en: "Student Internship", pt: "Estágio Curricular" },
    company: {
      en: "Ortopedia Super Ajudas · Lisbon, Portugal",
      pt: "Ortopedia Super Ajudas · Lisboa, Portugal",
    },
    logo: "/logos/super-ajudas.png",
    // Placeholder copy — this internship isn't on the CV, so there are no
    // bullet points to draw from yet. Ask Beatriz for the real description.
    detail: {
      en: "One-week student internship at an orthopaedic technical centre in Lisbon.",
      pt: "Estágio curricular de uma semana num centro de ortopedia técnica em Lisboa.",
    },
    tags: [{ en: "Orthotics", pt: "Ortótese" }],
  },
  {
    slug: "apdp-internship",
    brand: "#0f3b74",
    period: { en: "May 2025 · 1 week", pt: "Mai 2025 · 1 semana" },
    role: { en: "Student Internship", pt: "Estágio Curricular" },
    company: {
      en: "APDP Diabetes · Lisbon, Portugal",
      pt: "APDP Diabetes · Lisboa, Portugal",
    },
    logo: "/logos/apdp.png",
    detail: {
      en: "Performed foot assessments focused on pressure distribution, ulcer prevention and biomechanical risk factors, assisted in preventive care strategies to reduce the risk of diabetic foot complications, and designed and manufactured custom insoles using CAD/CAM technology.",
      pt: "Realização de avaliações do pé com foco na distribuição de pressões, prevenção de úlceras e fatores de risco biomecânicos, apoio em estratégias de prevenção para reduzir o risco de complicações do pé diabético e conceção e fabrico de palmilhas personalizadas com tecnologia CAD/CAM.",
    },
    tags: [
      { en: "Diabetic Foot", pt: "Pé Diabético" },
      { en: "CAD/CAM", pt: "CAD/CAM" },
      { en: "Custom Insoles", pt: "Palmilhas Personalizadas" },
      { en: "Preventive Care", pt: "Prevenção" },
    ],
  },
];
