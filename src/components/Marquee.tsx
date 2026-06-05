const items = [
  "POV VIDEO",
  "WORKER ACTIVITY",
  "SENSOR STREAMS",
  "MACHINE INTERACTION",
  "ENVIRONMENTAL DATA",
  "OPERATIONAL WORKFLOWS",
  "FIRST-PERSON CAPTURE",
  "MULTI-STREAM SYNC",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-ink py-5">
      <div
        className="animate-marquee flex shrink-0 items-center whitespace-nowrap"
        style={{ ["--marquee-duration" as string]: "40s" }}
      >
        {loop.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="mono px-7 text-sm uppercase tracking-[0.2em] text-bone-dim">
              {t}
            </span>
            <span className="text-amber" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-[linear-gradient(to_right,var(--color-void),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-[linear-gradient(to_left,var(--color-void),transparent)]" />
    </div>
  );
}
