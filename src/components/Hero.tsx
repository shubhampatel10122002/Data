"use client";

import { motion } from "framer-motion";
import { SignalReadout } from "./SignalReadout";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* backgrounds */}
      <div className="pointer-events-none absolute inset-0 blueprint opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,106,43,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
        <div className="animate-sweep h-24 w-full bg-[linear-gradient(to_bottom,transparent,rgba(255,106,43,0.5),transparent)] blur-[2px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink/60 px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-bone-dim">
              Multimodal data · Gujarat, India
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-balance"
          >
            Capture the
            <br />
            real world for
            <br />
            <span className="relative inline-block">
              <span className="text-amber">frontier AI.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full text-amber/40"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C60 3 120 3 180 6s90 4 118 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-[clamp(1rem,1.4vw,1.18rem)] leading-relaxed text-bone-dim"
          >
            Sarva runs custom multimodal data collection inside live industrial
            environments across India — turning real work into training-ready
            datasets for AI, robotics and research labs.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-medium uppercase tracking-[0.1em] text-void transition-all hover:bg-amber-soft"
            >
              Design a dataset
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#signals"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium uppercase tracking-[0.1em] text-bone-dim transition-colors hover:border-bone hover:text-bone"
            >
              See what we capture
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7"
          >
            {[
              ["150+", "facilities partnered"],
              ["8", "core industries"],
              ["E2E", "collection → delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl font-semibold text-bone">
                  {n}
                </div>
                <div className="mono mt-1 text-[10px] uppercase tracking-[0.16em] text-bone-faint">
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative lg:pl-4">
          <SignalReadout />
          <div className="mono mt-4 flex items-center justify-between px-1 text-[10px] uppercase tracking-[0.16em] text-bone-faint">
            <span>fig.01 — capture node</span>
            <span>5 modalities · synced</span>
          </div>
        </div>
      </div>
    </section>
  );
}
