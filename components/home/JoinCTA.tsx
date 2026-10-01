"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AudienceSubscribeForm } from "@/components/AudienceSubscribeForm";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";

const options = [
  { value: "client", label: "I want to use AI", button: "Join as a client" },
  { value: "creator", label: "I build with AI", button: "Apply as a creator" },
] as const;

export function JoinCTA() {
  const searchParams = useSearchParams();
  const initial: "client" | "creator" =
    searchParams.get("audience") === "creator" ? "creator" : "client";
  const [type, setType] = useState<"client" | "creator">(initial);
  const reduce = useReducedMotion();

  useEffect(() => {
    setType(initial);
  }, [initial]);

  const current = options.find((o) => o.value === type) ?? options[0];

  return (
    <section
      id="waitlist"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-paper/[0.08] px-4 py-28 sm:px-6 md:px-8 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30rem] left-1/2 -z-10 h-[50rem] w-[80rem] -translate-x-1/2 rounded-full bg-ember/30 blur-[160px]"
      />
      <div id="audience-waitlist" className="mx-auto max-w-4xl scroll-mt-24 text-center">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-[5.25rem]"
        >
          Be first when
          <br />
          we launch.
        </motion.h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/65">
          Early access, founder pricing, and weekly insights on AI for your business or career. No spam. Unsubscribe anytime.
        </p>

        <div
          role="radiogroup"
          aria-label="I am joining as"
          className="mx-auto mt-10 inline-flex rounded-full border border-paper/10 bg-ink-900/80 p-1 backdrop-blur"
        >
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={type === o.value}
              onClick={() => setType(o.value)}
              className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition sm:px-6 ${
                type === o.value ? "text-ink" : "text-paper/60 hover:text-paper"
              }`}
            >
              {type === o.value ? (
                <motion.span
                  layoutId="join-toggle"
                  className="absolute inset-0 rounded-full bg-paper"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              ) : null}
              <span className="relative">{o.label}</span>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-xl justify-center">
          <AudienceSubscribeForm
            type={type}
            source={`homepage-audience-${type}`}
            buttonLabel={current.button}
          />
        </div>
        <p className="mt-4 text-sm text-paper/50">{WAITLIST_MICROCOPY_SHORT}</p>
      </div>
    </section>
  );
}
