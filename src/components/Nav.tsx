"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wordmark } from "./Wordmark";

const links = [
  { label: "Signals", href: "#signals" },
  { label: "Reach", href: "#reach" },
  { label: "Process", href: "#process" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-2 rounded-full border border-line bg-ink/80 py-2.5 backdrop-blur-xl"
            : "my-0 border-b border-line/60 py-4"
        }`}
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Sarva home">
          <Wordmark className="h-5 w-auto text-bone" />
          <span className="deva hidden text-[13px] text-bone-faint sm:inline">
            सर्व
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] uppercase tracking-[0.18em] text-bone-dim transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-line bg-bone px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-void transition-all hover:bg-amber"
        >
          Start a collection
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </motion.header>
  );
}
