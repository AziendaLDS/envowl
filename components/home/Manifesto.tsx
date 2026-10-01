"use client";

import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Compass, SearchX, UserX } from "lucide-react";
import { Fragment, useRef } from "react";

const LINE = "Everyone's talking about AI. Nobody knows who to trust.";
const HIGHLIGHT = new Set(["Nobody", "knows", "who", "to", "trust."]);

const problems = [
  {
    icon: UserX,
    text: "LinkedIn is full of \"AI experts\" with no track record.",
  },
  {
    icon: SearchX,
    text: "Generic freelancer platforms don't vet for this kind of work.",
  },
  {
    icon: Compass,
    text: "Most buyers don't know which questions to ask yet.",
  },
];

function Word({
  word,
  progress,
  range,
  highlight,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.22em] inline-block ${highlight ? "text-ember" : ""}`}
    >
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = LINE.split(" ");
  // Desktop breaks after "AI." so the line splits into its two sentences.
  const LINE_BREAK_AFTER = words.indexOf("AI.");

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-36">
      <div ref={ref}>
        <h2 className="max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:max-w-none lg:text-[min(4.25vw,3.5rem)]">
          {reduce
            ? words.map((w, i) => (
                <Fragment key={i}>
                  <span className={`mr-[0.22em] inline-block ${HIGHLIGHT.has(w) ? "text-ember" : ""}`}>
                    {w}
                  </span>
                  {i === LINE_BREAK_AFTER && <span aria-hidden className="hidden lg:block" />}
                </Fragment>
              ))
            : words.map((w, i) => (
                <Fragment key={i}>
                  <Word
                    word={w}
                    progress={scrollYProgress}
                    range={[i / words.length, (i + 1) / words.length]}
                    highlight={HIGHLIGHT.has(w)}
                  />
                  {i === LINE_BREAK_AFTER && <span aria-hidden className="hidden lg:block" />}
                </Fragment>
              ))}
        </h2>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-[20px] border border-paper/[0.08] bg-paper/[0.08] md:mt-24 md:grid-cols-[1fr_1fr_1fr_1.2fr]">
        {problems.map(({ icon: Icon, text }, i) => (
          <motion.div
            key={text}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="bg-ink p-6 sm:p-8"
          >
            <Icon className="h-6 w-6 text-paper/40" strokeWidth={1.5} aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-paper/75">{text}</p>
          </motion.div>
        ))}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-end bg-ember p-6 text-ink sm:p-8"
        >
          <p className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Envowl exists to close that gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
