"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type Step = {
  title: string;
  body: string;
  details?: string[];
};

/** Numbered process rows: big index, title + body, optional detail chips. */
export function Steps({
  heading,
  headingClassName = "max-w-5xl sm:text-6xl",
  steps,
}: {
  heading: ReactNode;
  headingClassName?: string;
  steps: Step[];
}) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <h2 className={`${headingClassName} font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em]`}>
        {heading}
      </h2>
      <ol className="mt-14 border-t border-paper/10">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group grid gap-5 border-b border-paper/10 py-10 md:grid-cols-[7rem_1fr_1fr] md:gap-10 md:py-14"
          >
            <span
              aria-hidden
              className="font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-paper/15 transition-colors duration-500 group-hover:text-ember md:text-6xl"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-paper/60 sm:text-lg">
                {step.body}
              </p>
            </div>
            {step.details ? (
              <ul className="flex flex-wrap content-start gap-2 md:justify-end">
                {step.details.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-paper/15 px-3.5 py-1.5 text-sm text-paper/70"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
