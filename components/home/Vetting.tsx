"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Crosshair, Layers } from "lucide-react";
import Image from "next/image";
import Eyes from "@/components/Eyes";

export function Vetting() {
  const reduce = useReducedMotion();
  const cell = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24, scale: 0.98 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <div className="max-w-3xl">
        <h2 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-7xl">
          We say no.
          <br />
          <span className="text-ember">A lot.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/60">
          Anyone can call themselves an AI expert. Getting listed on Envowl takes more.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-[auto_auto_auto]">
        <motion.div
          {...cell(0)}
          className="relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-[20px] bg-ember p-7 text-ink sm:p-10 md:col-span-3 md:row-span-2"
        >
          <Layers className="h-8 w-8" strokeWidth={1.5} aria-hidden />
          <div>
            <h3 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              Portfolio quality
            </h3>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-ink/75">
              Systems running for real clients. If they can&apos;t show it, they don&apos;t get listed.
            </p>
          </div>
          <Eyes inline size={46} className="absolute right-7 top-7 sm:right-10 sm:top-10" />
        </motion.div>

        <motion.div
          {...cell(0.08)}
          className="dot-field relative flex min-h-[14rem] flex-col justify-between rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-8 md:col-span-3"
        >
          <Briefcase className="h-7 w-7 text-ember" strokeWidth={1.5} aria-hidden />
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Delivery credibility
            </h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-paper/60">
              We look at what they delivered and whether clients came back. The pitch doesn&apos;t count.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...cell(0.16)}
          className="relative flex min-h-[14rem] flex-col justify-between overflow-hidden rounded-[20px] border border-paper/[0.08] bg-gradient-to-br from-ink-700 to-ink-900 p-7 sm:p-8 md:col-span-3"
        >
          <Crosshair className="h-7 w-7 text-ember" strokeWidth={1.5} aria-hidden />
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Scope fit
            </h3>
            <p className="mt-2 max-w-md text-base leading-relaxed text-paper/60">
              You get matched with people who have built your kind of project
              before.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...cell(0.24)}
          className="relative flex min-h-[13rem] items-center overflow-hidden rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-10 md:col-span-6"
        >
          <p className="relative z-10 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight sm:text-4xl">
            We do the vetting.
            <br />
            <span className="text-ember">You do the hiring.</span>
          </p>
          <Image
            src="/logo-dark.png"
            alt=""
            width={866}
            height={558}
            aria-hidden
            className="pointer-events-none absolute -right-16 top-1/2 hidden w-[28rem] -translate-y-1/2 opacity-[0.12] md:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
