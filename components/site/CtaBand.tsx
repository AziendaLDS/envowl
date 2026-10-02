"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Closing call-to-action section: big centered headline over an ember floor glow. */
export function CtaBand({
  id,
  title,
    description,
  descriptionClassName = "max-w-xl",
  children,
}: {
  id?: string;
  title: ReactNode;
    description?: ReactNode;
  descriptionClassName?: string;
  children?: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id={id}
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-paper/[0.08] px-4 py-24 sm:px-6 md:px-8 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40rem] left-1/2 -z-10 h-[70rem] w-[100rem] -translate-x-1/2 ember-glow opacity-25"
      />
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-6xl"
        >
          {title}
        </motion.h2>
        {description ? (
          <p className={`mx-auto mt-6 ${descriptionClassName} text-lg leading-relaxed text-paper/65`}>
            {description}
          </p>
        ) : null}
        {children ? <div className="mx-auto mt-10 flex max-w-xl justify-center">{children}</div> : null}
      </div>
    </section>
  );
}
