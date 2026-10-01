"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Faq({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Questions, answered.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-paper/60 sm:whitespace-nowrap">
            Want more?{" "}
            <Link href="/platform" className="font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember">
              Read the platform overview
            </Link>
            .
          </p>
        </div>

        <div className="border-t border-paper/10">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-paper/10">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-semibold tracking-tight text-paper transition hover:text-ember sm:text-2xl"
                  >
                    {item.question}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        isOpen ? "rotate-45 border-ember bg-ember text-ink" : "border-paper/20 text-paper"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-${i}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 text-base leading-relaxed text-paper/65 sm:text-lg">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
