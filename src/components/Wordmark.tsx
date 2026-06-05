export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Glyph className="h-[1.15em] w-[1.15em] shrink-0" />
      <span className="font-display text-[1.05em] font-semibold uppercase leading-none tracking-[0.22em]">
        Sarva
      </span>
    </span>
  );
}

export function Glyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      {/* capture brackets */}
      <path
        d="M9 6H6.5A1.5 1.5 0 0 0 5 7.5V10M23 6h2.5A1.5 1.5 0 0 1 27 7.5V10M9 26H6.5A1.5 1.5 0 0 1 5 24.5V22M23 26h2.5A1.5 1.5 0 0 0 27 24.5V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* aperture dot */}
      <circle cx="16" cy="16" r="3.4" fill="#ff6a2b" />
      <circle cx="16" cy="16" r="6.6" stroke="#ff6a2b" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}
