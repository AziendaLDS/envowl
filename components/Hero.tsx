"use client";

import { motion } from "framer-motion";
import { VolcanoBackground } from "@/components/VolcanoBackground";
import { PLATFORM_NAME } from "@/lib/constants";

/** Must match `ProblemSection` / page background below the hero (#F2F2F2). */
const NEXT_SECTION_BG = "#F2F2F2";

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-[calc(100svh+min(5rem,8vh))] w-full min-w-0 overflow-x-clip overflow-hidden border-b-0 text-white">
      <VolcanoBackground
        skyTop="#0f0c29"
        skyBottom="#302b63"
        lavaColor="#f54927"
        meteorCount={5}
        eruptionIntensity={1}
        starCount={50}
        enableMeteors
        enableEmbers
      />
      {/* Long soft fade so the canvas bleeds into the next section with no hard edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(52vh,28rem)] sm:h-[min(48vh,30rem)] md:h-[min(42vh,32rem)]"
        style={{
          background: `linear-gradient(to top,
            ${NEXT_SECTION_BG} 0%,
            ${NEXT_SECTION_BG} 14%,
            rgba(242, 242, 242, 0.94) 26%,
            rgba(242, 242, 242, 0.72) 42%,
            rgba(242, 242, 242, 0.42) 58%,
            rgba(242, 242, 242, 0.18) 74%,
            rgba(242, 242, 242, 0.05) 88%,
            transparent 100%
          )`,
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-5xl flex-col items-center justify-center px-6 pb-28 pt-24 text-center sm:px-10 sm:pb-44 sm:pt-36 md:pb-48 md:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/65 sm:mb-6 sm:text-sm sm:tracking-[0.2em]"
        >
          The AI Talent Marketplace
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.08] lg:text-6xl lg:leading-[1.05] xl:text-7xl"
        >
          Find vetted AI experts. Or become one.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-8 max-w-3xl text-balance text-lg leading-relaxed text-white/80 sm:text-xl sm:leading-relaxed"
        >
          {PLATFORM_NAME} connects businesses and individuals who want to
          implement AI with the creators who actually know how to do it —
          curated, trusted, and built for where the world is going.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 w-full max-w-2xl sm:mt-14"
        >
          {children}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-3 sm:gap-6"
        >
          {[
            { label: "500+ AI creators applying", k: "a" },
            { label: "2,400 people on the waitlist", k: "b" },
            { label: "Launching Q3 2026", k: "c" },
          ].map((s) => (
            <div key={s.k} className="text-center sm:text-left">
              <p className="text-sm font-medium leading-snug text-white sm:text-base md:text-lg">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
