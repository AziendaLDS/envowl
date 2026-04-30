"use client";

import { motion } from "framer-motion";
import { ShootingStarsHeroBackground } from "@/components/ShootingStarsHeroBackground";
import { PLATFORM_NAME } from "@/lib/constants";

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-[calc(100svh+min(5rem,8vh))] w-full min-w-0 overflow-x-clip overflow-hidden border-b-0 text-white">
      <ShootingStarsHeroBackground />
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full min-w-0 max-w-5xl flex-col items-center justify-center pb-28 pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] pt-24 text-center sm:pb-44 sm:pl-[max(2.5rem,env(safe-area-inset-left))] sm:pr-[max(2.5rem,env(safe-area-inset-right))] sm:pt-36 md:pb-48 md:pt-40">
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
      </div>
    </section>
  );
}
