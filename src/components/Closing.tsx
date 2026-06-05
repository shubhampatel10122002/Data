"use client";

import { motion } from "framer-motion";
import { Wordmark } from "./Wordmark";

export function Closing() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-line bg-ink"
    >
      <div className="pointer-events-none absolute inset-0 blueprint opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(80%_100%_at_50%_0%,rgba(255,106,43,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="mono text-[11px] uppercase tracking-[0.24em] text-amber">
            <span className="deva text-[13px] normal-case tracking-normal">
              सर्व
            </span>{" "}
            — everything, captured
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-balance">
            Build models that
            <br />
            understand the
            <span className="text-amber"> real world.</span>
          </h2>
          <p className="mt-7 max-w-xl text-bone-dim">
            Tell us what your model needs to learn. We&apos;ll design the
            collection program and deliver the data.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@sarvahq.com"
              className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-void transition-all hover:bg-amber-soft"
            >
              hello@sarvahq.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://calendly.com/sp8484-nyu/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm font-medium uppercase tracking-[0.1em] text-bone-dim transition-colors hover:border-bone hover:text-bone"
            >
              Book a scoping call
            </a>
          </div>
        </motion.div>

        {/* footer base */}
        <div className="mt-24 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Wordmark className="h-5 w-auto text-bone" />
          <div className="mono flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-bone-faint">
            <span>33 W 17th St, New York, NY 10011</span>
            <span>Data collected in Gujarat, India</span>
            <span>© {new Date().getFullYear()} Sarva</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
