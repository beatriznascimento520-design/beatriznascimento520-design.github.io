/**
 * Fixed-height, flexible-width logo plate. Falls back to the organisation's
 * initial when the image is missing or fails to load.
 */
export default function LogoChip({ name, logo, className = "" }) {
  return (
    <span className={`logo-chip ${className}`.trim()}>
      {logo && (
        <img
          className="logo-chip__img"
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
      )}
      <span
        className="logo-chip__fallback"
        style={logo ? undefined : { display: "flex" }}
      >
        {name.charAt(0)}
      </span>
    </span>
  );
}
