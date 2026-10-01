"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Megaphone,
  PenLine,
  Users,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Workflow,
    label: "Workflow automation",
    desc: "Eliminate repetitive admin work and manual processes.",
  },
  {
    icon: PenLine,
    label: "AI content systems",
    desc: "Scale blogs, social, and email without a bigger team.",
  },
  {
    icon: Bot,
    label: "Chatbots and assistants",
    desc: "Customer support, internal Q&A, and lead qualification.",
  },
  {
    icon: BarChart3,
    label: "Data and reporting",
    desc: "Turn raw data into dashboards and weekly summaries.",
  },
  {
    icon: Megaphone,
    label: "Marketing automation",
    desc: "Campaigns, sequences, and targeting on autopilot.",
  },
  {
    icon: Users,
    label: "CRM and lead systems",
    desc: "Qualify, track, and follow up without manual work.",
  },
];

/** Bento: first cell is the ember feature, the rest vary between dot field and gradient. */
const cellStyles = [
  "bg-ember text-ink md:col-span-2 md:row-span-2 md:min-h-[22rem]",
  "border border-paper/[0.08] bg-ink-900",
  "dot-field border border-paper/[0.08] bg-ink-900",
  "border border-paper/[0.08] bg-gradient-to-br from-ink-700 to-ink-900",
  "border border-paper/[0.08] bg-ink-900",
  "dot-field border border-paper/[0.08] bg-ink-900 sm:col-span-2 md:col-span-4 md:min-h-[10rem]",
];

export function UseCaseCategories() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <h2 className="max-w-none font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-[clamp(1.75rem,4vw,3.25rem)]">
        If your problem fits here,{" "}
        <br className="hidden sm:block" />
        We&apos;ll have someone for it.
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        {categories.map(({ icon: Icon, label, desc }, i) => {
          const feature = i === 0;
          return (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`flex min-h-[13rem] flex-col justify-between rounded-[20px] p-7 ${cellStyles[i]}`}
            >
              <Icon
                className={feature ? "h-9 w-9" : "h-7 w-7 text-ember"}
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <h3
                  className={`font-display font-semibold tracking-tight ${
                    feature ? "text-4xl font-bold sm:text-5xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {label}
                </h3>
                <p
                  className={`mt-2 leading-relaxed ${
                    feature ? "max-w-sm text-lg text-ink/75" : "text-base text-paper/60"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-8 text-base text-paper/60">
        Not on the list?{" "}
        <Link
          href="/#waitlist"
          className="group inline-flex items-center gap-1.5 font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
        >
          Describe it anyway
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden />
        </Link>
      </p>
    </section>
  );
}

const stats = [
    { value: "Free", label: "To join the waitlist" },
  { value: "100%", label: "Of creators reviewed manually" },
  { value: "2-3", label: "Matches, not 200 search results" },
];

export function TrustSection({ platformName }: { platformName: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <div className="grid gap-12 rounded-[28px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:p-16">
        <div>
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            One bad AI experience can set you back months.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-paper/65">
            <p>
              It happens more than it should: a business hires someone who overpromises, delivers something broken, and the owner walks away
              convinced AI &ldquo;doesn&apos;t work.&rdquo; The AI wasn&apos;t the problem. The hiring was.
            </p>
            <p className="text-paper">
              Every creator on {platformName} is reviewed manually before they&apos;re listed: real portfolios, real delivery history, real results.
            </p>
          </div>
        </div>
        <dl className="grid content-center gap-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-ember pl-6">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-5xl font-bold tracking-[-0.03em] text-paper sm:text-6xl">
                {s.value}
              </dd>
              <dd className="mt-1 text-base text-paper/55">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
