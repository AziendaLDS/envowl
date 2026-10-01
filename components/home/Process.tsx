"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    verb: "Browse",
    title: "Find the right expert",
    copy: "Every creator is vetted manually before they're listed. Filter by use case, industry, tool, or budget.",
    detail: (
      <div className="flex flex-wrap gap-2">
        {["Customer support", "Home services", "n8n", "Under $5k"].map((c, i) => (
          <span
            key={c}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              i === 1
                ? "border-ember bg-ember/10 text-paper"
                : "border-paper/15 text-paper/60"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
    ),
  },
  {
    verb: "Brief",
    title: "Describe your project",
    copy: "Our brief builder helps you say exactly what you need, even if you're not sure yet.",
    detail: (
      <dl className="grid grid-cols-3 gap-4 text-sm">
        {[
          ["Goal", "Answer every call"],
          ["Budget", "$3-5k"],
          ["Timeline", "3 weeks"],
        ].map(([k, v]) => (
          <div key={k}>
            <dt className="text-paper/45">{k}</dt>
            <dd className="mt-1 font-medium text-paper">{v}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    verb: "Ship",
    title: "Get it done, safely",
    copy: "Clear pricing, milestone-based delivery, and honest reviews from past clients. We stay involved so nothing slips.",
    detail: (
      <ul className="flex flex-col gap-2.5 text-sm">
        {[
          ["Scoping call", true],
          ["Working prototype", true],
          ["Handover and training", false],
        ].map(([label, done]) => (
          <li key={label as string} className="flex items-center gap-3">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                done ? "bg-ember text-ink" : "border border-paper/25"
              }`}
            >
              {done ? <Check className="h-3 w-3" strokeWidth={3} aria-hidden /> : null}
            </span>
            <span className={done ? "text-paper" : "text-paper/50"}>{label}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            From vague idea to shipped system.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/60">
            No jargon, no gamble. Three steps between you and AI that actually
            works for your business.
          </p>
        </div>

        <div ref={ref} className="relative pl-8 sm:pl-12">
          <div aria-hidden className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-paper/10" />
          <motion.div
            aria-hidden
            style={reduce ? undefined : { scaleY }}
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px origin-top bg-ember"
          />
          <div className="flex flex-col gap-20 md:gap-28">
            {steps.map((s, i) => (
              <motion.div
                key={s.verb}
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-8 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-ember bg-ink sm:-left-12"
                />
                <p className="font-display text-6xl font-extrabold leading-none tracking-[-0.04em] text-paper/[0.12] sm:text-8xl">
                  {s.verb}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-paper/60 sm:text-lg">
                  {s.copy}
                </p>
                <div className="mt-6 max-w-lg rounded-2xl border border-paper/[0.08] bg-ink-900 p-5">
                  {s.detail}
                </div>
                <span className="sr-only">Step {i + 1} of {steps.length}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
