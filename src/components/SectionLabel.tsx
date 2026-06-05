export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="mono text-[11px] tracking-[0.2em] text-amber">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span className="mono text-[11px] uppercase tracking-[0.24em] text-bone-faint">
        {children}
      </span>
    </div>
  );
}
