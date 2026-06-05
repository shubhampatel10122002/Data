"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const channels = [
  { id: "POV", label: "pov.video", unit: "60fps", base: 0.78 },
  { id: "ACT", label: "worker.activity", unit: "pose", base: 0.52 },
  { id: "SNS", label: "sensor.stream", unit: "kHz", base: 0.64 },
  { id: "MCH", label: "machine.io", unit: "plc", base: 0.41 },
  { id: "ENV", label: "environment", unit: "°c·db", base: 0.33 },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const fn = () => setReduced(m.matches);
    m.addEventListener("change", fn);
    return () => m.removeEventListener("change", fn);
  }, []);
  return reduced;
}

function Waveform({ seed, active }: { seed: number; active: boolean }) {
  const [phase, setPhase] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let raf: number;
    const loop = () => {
      setPhase((p) => p + 0.05);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const points = Array.from({ length: 48 }, (_, i) => {
    const x = (i / 47) * 100;
    const n =
      Math.sin(i * 0.5 + phase + seed) * 0.5 +
      Math.sin(i * 0.17 + phase * 1.7 + seed) * 0.5;
    const amp = active ? 9 : 3.5;
    const y = 14 + n * amp;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 100 28"
      preserveAspectRatio="none"
      className="h-7 w-full"
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        stroke={active ? "#ff6a2b" : "#3a3a40"}
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SignalReadout() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();
  const tick = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % channels.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduced) {
      setCount(1284920);
      return;
    }
    const id = setInterval(() => {
      tick.current += Math.floor(Math.random() * 40) + 12;
      setCount(1284920 + tick.current);
    }, 120);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-ink/70 backdrop-blur-sm"
    >
      {/* header bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          <span className="mono text-[11px] uppercase tracking-[0.18em] text-bone-dim">
            live capture
          </span>
        </div>
        <span className="mono text-[11px] tracking-[0.1em] text-bone-faint">
          node / guj-ahm-04
        </span>
      </div>

      {/* channels */}
      <div className="divide-y divide-line-soft">
        {channels.map((c, i) => {
          const active = i === activeIdx;
          return (
            <div
              key={c.id}
              className="grid grid-cols-[44px_1fr_56px] items-center gap-3 px-4 py-2.5 transition-colors"
              style={{ background: active ? "rgba(255,106,43,0.04)" : "transparent" }}
            >
              <span
                className={`mono text-[11px] font-medium tracking-wider transition-colors ${
                  active ? "text-amber" : "text-bone-faint"
                }`}
              >
                {c.id}
              </span>
              <div className="flex items-center gap-3 overflow-hidden">
                <Waveform seed={i * 2.3} active={active} />
              </div>
              <span className="mono text-right text-[10px] tracking-wide text-bone-faint">
                {c.unit}
              </span>
            </div>
          );
        })}
      </div>

      {/* footer counter */}
      <div className="flex items-center justify-between border-t border-line px-4 py-3">
        <span className="mono text-[10px] uppercase tracking-[0.18em] text-bone-faint">
          frames collected
        </span>
        <span className="mono text-[13px] tabular-nums tracking-wider text-bone">
          {count.toLocaleString("en-US")}
        </span>
      </div>
    </motion.div>
  );
}
