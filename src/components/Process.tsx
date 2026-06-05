"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    id: "P1",
    title: "Design",
    body: "We scope a custom collection program around your model's training, evaluation and deployment goals.",
  },
  {
    id: "P2",
    title: "Collect",
    body: "Crews deploy across partner facilities to capture synchronized, multimodal real-world signals at scale.",
  },
  {
    id: "P3",
    title: "Deliver",
    body: "Optional annotation, QA, cleaning and metadata yield training-ready datasets that drop into your pipeline.",
  },
];

const services = [
  "Annotation & labeling",
  "Quality assurance",
  "Data cleaning",
  "Multimodal sync",
  "Metadata generation",
  "Custom structuring",
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionLabel index="03 / process">From floor to model</SectionLabel>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-balance">
            One pipeline, end to end.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-bone-dim">
            We own the path from a live factory floor to a dataset your team can
            train on directly.
          </p>
        </div>

        {/* pipeline */}
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-line md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-7 hidden h-px origin-left bg-gradient-to-r from-amber to-amber/0 md:block"
            style={{ right: 0 }}
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-ink mono text-xs tracking-wider text-amber">
                    {s.id}
                  </span>
                  <span className="mono text-[11px] uppercase tracking-[0.2em] text-bone-faint md:hidden">
                    step {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-bone">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone-dim">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* services strip */}
        <div className="mt-20 rounded-2xl border border-line bg-ink p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-bone-faint">
              optional post-processing
            </div>
            <div className="flex flex-wrap gap-2.5">
              {services.map((svc) => (
                <span
                  key={svc}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[13px] text-bone-dim"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
