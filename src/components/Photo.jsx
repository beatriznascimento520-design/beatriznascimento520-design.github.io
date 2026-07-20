/**
 * A photo frame. Pass `src` to show a real image; without one it renders a
 * tasteful gradient placeholder so the layout looks finished while you swap
 * in real photos later.
 */
export default function Photo({ src, alt = "", label, className = "", tone = 1 }) {
  return (
    <div className={`photo photo--tone${tone} ${className}`.trim()}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="photo__placeholder" role="img" aria-label={alt || label}>
          <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4 5h3l1.5-2h7L17 5h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 3.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5Zm0 2A2.5 2.5 0 1 1 9.5 13 2.5 2.5 0 0 1 12 10.5Z"
            />
          </svg>
          {label && <span>{label}</span>}
        </div>
      )}
    </div>
  );
}
