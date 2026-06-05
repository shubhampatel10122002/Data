"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const rows = [
  {
    id: "01",
    name: "First-person (POV) video",
    desc: "Head-mounted capture of how tasks are actually performed on the floor.",
    tag: "egocentric",
  },
  {
    id: "02",
    name: "Worker activity recordings",
    desc: "Multi-angle human action, manipulation and dexterity in real workflows.",
    tag: "action",
  },
  {
    id: "03",
    name: "Sensor streams",
    desc: "IMU, audio, thermal, vibration and force signals, timestamped to video.",
    tag: "telemetry",
  },
  {
    id: "04",
    name: "Machine interactions",
    desc: "Human–machine operation, PLC events and tool use across stations.",
    tag: "control",
  },
  {
    id: "05",
    name: "Environmental data",
    desc: "Lighting, acoustics, temperature and spatial context of each site.",
    tag: "context",
  },
  {
    id: "06",
    name: "Operational workflows",
    desc: "End-to-end process sequences that are hard to source any other way.",
    tag: "procedure",
  },
];

export function Modalities() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="signals" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel index="01 / signals">What we capture</SectionLabel>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-balance">
              Real-world signals, not generic datasets.
            </h2>
            <p className="mt-6 max-w-md text-bone-dim">
              Every program is designed around your model. We collect the
              modalities that conventional data sources can&apos;t reach — and
              keep them perfectly synchronized.
            </p>
          </div>

          <ul className="border-t border-line">
            {rows.map((r, i) => {
              const active = hover === r.id;
              return (
                <motion.li
                  key={r.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHover(r.id)}
                  onMouseLeave={() => setHover(null)}
                  className="group relative border-b border-line"
                >
                  <div
                    className="absolute inset-0 origin-left bg-amber/[0.04] transition-transform duration-500"
                    style={{ transform: active ? "scaleX(1)" : "scaleX(0)" }}
                  />
                  <div className="relative flex items-start gap-5 py-6 sm:gap-8">
                    <span
                      className={`mono pt-1 text-[12px] tracking-wider transition-colors ${
                        active ? "text-amber" : "text-bone-faint"
                      }`}
                    >
                      {r.id}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3
                          className={`font-display text-xl font-medium transition-colors sm:text-2xl ${
                            active ? "text-amber" : "text-bone"
                          }`}
                        >
                          {r.name}
                        </h3>
                        <span className="mono text-[10px] uppercase tracking-[0.18em] text-bone-faint">
                          {r.tag}
                        </span>
                      </div>
                      <motion.p
                        initial={false}
                        animate={{
                          opacity: active ? 1 : 0.55,
                        }}
                        className="mt-2 max-w-lg text-sm leading-relaxed text-bone-dim"
                      >
                        {r.desc}
                      </motion.p>
                    </div>
                    <span
                      className={`mono hidden shrink-0 self-center text-lg transition-all duration-300 sm:block ${
                        active
                          ? "translate-x-0 text-amber opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
