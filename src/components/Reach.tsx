"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Counter } from "./Counter";

const industries = [
  "Textiles",
  "Chemicals",
  "Pharmaceuticals",
  "Engineering",
  "Consumer goods",
  "Automotive components",
  "Industrial manufacturing",
  "Heavy machinery",
];

const stats: { value: React.ReactNode; label: string }[] = [
  { value: <Counter to={150} suffix="+" />, label: "manufacturing facilities" },
  { value: <Counter to={8} />, label: "industry verticals" },
  { value: <Counter to={5} />, label: "synced modalities" },
];

export function Reach() {
  return (
    <section id="reach" className="relative border-y border-line bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 dotgrid opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel index="02 / reach">Grounded in real factories</SectionLabel>
            <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-balance">
              A collection network built into India&apos;s industrial floor.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-bone-dim sm:text-right">
            Deep partnerships across Gujarat&apos;s manufacturing belt give us
            access to environments most data teams never see.
          </p>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ink px-6 py-8"
            >
              <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-semibold leading-none text-bone">
                {s.value}
              </div>
              <div className="mono mt-3 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-bone-faint">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* industries */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {industries.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-full border border-line bg-void px-4 py-2 text-sm text-bone-dim transition-colors hover:border-amber hover:text-bone"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
