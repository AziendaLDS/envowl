"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BriefMatcher } from "@/components/home/BriefMatcher";
import { WaitlistForm } from "@/components/WaitlistForm";

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      {/* Ember glow + dot field behind the matcher */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-[-10%] -z-10 h-[46rem] w-[46rem] rounded-full bg-ember/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="dot-field pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_40%,#000_20%,transparent_75%)]"
      />

      <div className="mx-auto grid min-h-[100dvh] grid-cols-1 max-w-7xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 md:px-8 md:pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-36">
        <div className="min-w-0 max-w-2xl">
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-paper/10 bg-paper/[0.04] py-1.5 pl-1.5 pr-4 text-sm text-paper/75"
          >
            <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-semibold text-ink">
              Waitlist open
            </span>
            Launching Summer 2027
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-7 font-display text-[2.75rem] font-bold leading-[0.95] tracking-[-0.035em] text-paper sm:text-6xl lg:text-[3.75rem] xl:text-[4.75rem]"
          >
            Hire AI builders who&apos;ve{" "}
            <span className="text-ember">actually shipped.</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-[34rem] text-lg leading-relaxed text-paper/65 sm:text-xl"
          >
            Envowl is a curated marketplace for AI talent. Every creator is reviewed manually before they&apos;re listed, so you hire proof, not promises.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 max-w-xl">
            <WaitlistForm
              align="left"
              defaultType="client"
              source="homepage"
              buttonLabel="Join the waitlist"
            />
          </motion.div>

          <motion.div {...rise(0.3)} className="mt-5">
            <Link
              href="/?audience=creator#audience-waitlist"
              scroll
              className="group -my-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-paper/60 transition hover:text-paper"
            >
              Build with AI? Apply as a creator
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="w-full min-w-0 lg:justify-self-end"
        >
          <div className="lg:max-w-[34rem]">
            <BriefMatcher />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
