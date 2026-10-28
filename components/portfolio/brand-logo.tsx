/**
 * Brand lockup: triangle mark + wordmark, drawn in the brand teal.
 *
 * Vector rather than a bitmap so it stays sharp at any size, and so the accent
 * colour lives in one place instead of being baked into an exported file. The
 * wordmark is real text, which keeps it on the site's own typeface.
 */
/**
 * `onDark` forces the light variant for surfaces that stay dark in every theme (the footer);
 * `onLight` forces the dark variant for surfaces that stay white in every theme (the navbar).
 */
export function BrandLogo({
  className = "",
  onDark = false,
  onLight = false,
}: {
  className?: string;
  onDark?: boolean;
  onLight?: boolean;
}) {
  const ink = onDark ? "text-white" : onLight ? "text-neutral-900" : "text-neutral-900 dark:text-white";
  const rule = onDark ? "bg-white/25" : onLight ? "bg-neutral-300" : "bg-neutral-300 dark:bg-white/25";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 72 68"
        className={`h-full w-auto shrink-0 ${ink}`}
        fill="none"
        aria-hidden="true"
      >
        {/* triangle mark */}
        <path
          d="M36 8 L64 58 H8 Z"
          stroke="#1a6b3d"
          strokeWidth="8.5"
          strokeLinejoin="round"
        />
        {/* </> set into the base of the triangle */}
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M29 42 L23.5 48.5 L29 55" />
          <path d="M33.5 40.5 L38.5 56.5" />
          <path d="M43 42 L48.5 48.5 L43 55" />
        </g>
      </svg>

      <span className={`h-[76%] w-px shrink-0 ${rule}`} />

      <span className="flex flex-col justify-center leading-none">
        <span className={`text-[0.95em] font-extrabold tracking-tight ${ink}`}>
          Web Development
        </span>
        <span className={`mt-[0.28em] text-[0.62em] font-bold uppercase tracking-[0.14em] ${onDark ? "text-[#1a6b3d]" : "text-[#1a6b3d]"}`}>
          By Asif
        </span>
      </span>
    </span>
  );
}
