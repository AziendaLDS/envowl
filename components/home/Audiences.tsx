"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const audiences = [
  {
    who: "Businesses",
    title: "Stop leaving hours on the table.",
    copy: "Run a plumbing company or a marketing team? Find vetted experts who speak your language, not tech jargon.",
    href: "/for-businesses",
    cta: "Join as a client",
    tone: "bg-ink-900 text-paper border border-paper/[0.08]",
    muted: "text-paper/60",
  },
  {
    who: "Professionals",
    title: "Stay ahead as your role changes.",
    copy: "Guidance from people who use AI at work every day. Not another course you'll never finish.",
    href: "/for-professionals",
    cta: "Join the waitlist",
    tone: "bg-paper text-ink",
    muted: "text-ink/65",
  },
  {
    who: "Creators",
    title: "Stop chasing bad leads.",
    copy: "Your problem isn't building. It's finding clients who get the value of what you do. We bring them to you.",
    href: "/for-creators",
    cta: "Apply as a creator",
    tone: "bg-ember text-ink",
    muted: "text-ink/70",
  },
];

export function Audiences() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:max-w-none">
        One marketplace.<br className="hidden lg:inline" /> Three ways in.
      </h2>

      <div className="mt-14 flex flex-col gap-3 lg:h-[30rem] lg:flex-row">
        {audiences.map((a, i) => {
          const isActive = active === i;
          return (
            <motion.div
              key={a.who}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`relative min-w-0 overflow-hidden rounded-[20px] ${a.tone} lg:basis-0 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive ? "lg:grow-[2.4]" : "lg:grow"
              }`}
            >
              <Link
                href={a.href}
                className="group flex h-full min-h-[18rem] flex-col justify-between p-7 outline-none focus-visible:ring-4 focus-visible:ring-ember/50 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xl font-semibold">{a.who}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-current transition group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                </div>
                <div className={`lg:max-w-[26rem] ${isActive ? "" : "lg:opacity-60"} transition-opacity duration-300`}>
                  <h3 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-4xl">
                    {a.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-sm text-base leading-relaxed ${a.muted} transition-opacity duration-300 ${
                      isActive ? "lg:opacity-100" : "lg:opacity-0"
                    }`}
                  >
                    {a.copy}
                  </p>
                  <span
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-[6px] transition-opacity duration-300 ${
                      isActive ? "lg:opacity-100" : "lg:opacity-0"
                    }`}
                  >
                    {a.cta}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
