/**
 * Small flat flags for the language toggle. Simplified for legibility at
 * ~22px — the Union Jack skips the counterchanged diagonals and the Portuguese
 * armillary sphere is reduced to a ring and shield.
 */
export default function Flag({ lang, className = "" }) {
  const common = {
    className: `flag ${className}`.trim(),
    viewBox: "0 0 60 40",
    width: 22,
    height: 15,
    "aria-hidden": "true",
    focusable: "false",
  };

  if (lang === "pt") {
    return (
      <svg {...common}>
        <rect width="60" height="40" fill="#da291c" />
        <rect width="24" height="40" fill="#046a38" />
        <circle cx="24" cy="20" r="8.5" fill="#ffe044" />
        <circle cx="24" cy="20" r="8.5" fill="none" stroke="#046a38" strokeWidth="1.4" />
        <rect x="19.5" y="15" width="9" height="10" rx="2" fill="#fff" stroke="#da291c" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#c8102e" strokeWidth="4" />
      <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="13" />
      <path d="M30 0 V40 M0 20 H60" stroke="#c8102e" strokeWidth="7" />
    </svg>
  );
}
