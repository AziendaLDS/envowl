"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Inner-page hero. Sits under the transparent header (negative top margin),
 * left-aligned with an ember glow. `aside` renders a right-hand column on lg+.
 * `titleAbove` puts the title on its own full-width row, with the description
 * and `aside` side by side beneath it.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
  compact = false,
  titleClassName,
  titleAbove = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
  /** Overrides the default h1 size classes. */
  titleClassName?: string;
  titleAbove?: boolean;
}) {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20, filter: "blur(8px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 0.8, delay, ease },
        };

  const padding = compact ? "pb-12 pt-32 md:pb-16 md:pt-40" : "pb-16 pt-32 md:pb-24 md:pt-44";

  const eyebrowEl = eyebrow ? (
    <motion.p {...rise(0)} className="text-sm font-semibold text-ember">
      {eyebrow}
    </motion.p>
  ) : null;

  const titleEl = (
    <motion.h1
      {...rise(0.06)}
      className={`font-display font-bold leading-[0.98] tracking-[-0.035em] text-paper ${
        eyebrow ? "mt-4" : ""
      } ${titleClassName ?? (compact ? "text-4xl sm:text-5xl lg:text-6xl" : aside ? "text-[2.6rem] sm:text-6xl lg:text-[3.75rem] xl:text-[4.5rem]" : "text-[2.6rem] sm:text-6xl lg:text-7xl")}`}
    >
      {title}
    </motion.h1>
  );

  const descriptionEl = description ? (
    <motion.p
      {...rise(0.12)}
      className={`max-w-2xl text-lg leading-relaxed text-paper/65 sm:text-xl ${titleAbove ? "" : "mt-6"}`}
    >
      {description}
    </motion.p>
  ) : null;

  const childrenEl = children ? (
    <motion.div {...rise(0.18)} className="mt-9 max-w-xl">
      {children}
    </motion.div>
  ) : null;

  const asideEl = aside ? (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease }}
      className={`min-w-0 ${titleAbove ? "" : "lg:h-[35rem]"}`}
    >
      {aside}
    </motion.div>
  ) : null;

  return (
    <section className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[40rem] w-[40rem] rounded-full bg-ember/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="dot-field pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_70%_at_85%_20%,#000_10%,transparent_70%)]"
      />
      {titleAbove ? (
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ${padding}`}>
          <div className="min-w-0">
            {eyebrowEl}
            {titleEl}
          </div>
          <div
            className={`mt-8 grid grid-cols-1 gap-12 ${
              aside ? "lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14" : ""
            }`}
          >
            <div className="min-w-0 max-w-3xl">
              {descriptionEl}
              {childrenEl}
            </div>
            {asideEl}
          </div>
        </div>
      ) : (
        <div
          className={`mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-4 sm:px-6 md:px-8 ${
            aside ? "lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-14" : ""
          } ${padding}`}
        >
          <div className="min-w-0 max-w-3xl">
            {eyebrowEl}
            {titleEl}
            {descriptionEl}
            {childrenEl}
          </div>
          {asideEl}
        </div>
      )}
    </section>
  );
}
