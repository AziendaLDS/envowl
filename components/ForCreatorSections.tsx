"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Briefcase, Clock, Inbox, Wallet, Wrench } from "lucide-react";

type Benefit = { title: string; copy: string };

export function CreatorBenefits({ benefits }: { benefits: Benefit[] }) {
  const reduce = useReducedMotion();
  const icons = [Inbox, BadgeCheck, Wrench];
  const [lead, ...rest] = benefits;
  const LeadIcon = icons[0];

  const reveal = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
        What you get.
      </h2>
      <div className="mt-14 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          {...reveal(0)}
          className="flex min-h-[22rem] flex-col justify-between rounded-[20px] bg-ember p-8 text-ink sm:p-10"
        >
          <LeadIcon className="h-9 w-9" strokeWidth={1.5} aria-hidden />
          <div>
            <h3 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
              {lead.title}
            </h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/75">{lead.copy}</p>
          </div>
        </motion.div>
        <div className="grid gap-3">
          {rest.map((b, i) => {
            const Icon = icons[i + 1];
            return (
              <motion.div
                key={b.title}
                {...reveal(0.08 * (i + 1))}
                className={`flex flex-col justify-between gap-10 rounded-[20px] border border-paper/[0.08] p-7 sm:p-8 ${
                  i === 0 ? "dot-field bg-ink-900" : "bg-gradient-to-br from-ink-700 to-ink-900"
                }`}
              >
                <Icon className="h-7 w-7 text-ember" strokeWidth={1.5} aria-hidden />
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {b.title}
                  </h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-paper/60">{b.copy}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const types = [
  {
    label: "AI automation builders",
    desc: "n8n, Make, Zapier, custom agents",
    tools: [
      { slug: "n8n", label: "n8n" },
      { slug: "make", label: "Make" },
      { slug: "zapier", label: "Zapier" },
    ],
  },
  {
    label: "AI content creators",
    desc: "Scripts, video, newsletters at scale",
    tools: [
      { slug: "youtube", label: "YouTube" },
      { slug: "substack", label: "Substack" },
      { slug: "elevenlabs", label: "ElevenLabs" },
    ],
  },
  {
    label: "No-code and low-code devs",
    desc: "Webflow, Framer, Airtable, Notion",
    tools: [
      { slug: "webflow", label: "Webflow" },
      { slug: "framer", label: "Framer" },
      { slug: "airtable", label: "Airtable" },
      { slug: "notion", label: "Notion" },
    ],
  },
  {
    label: "AI-native agencies",
    desc: "Full-service teams with AI at the core",
    tools: [
      { slug: "vercel", label: "Vercel" },
      { slug: "supabase", label: "Supabase" },
      { slug: "anthropic", label: "Anthropic" },
    ],
  },
  {
    label: "Prompt engineers",
    desc: "Claude, Gemini, and GPT workflow design",
    tools: [
      { slug: "claude", label: "Claude" },
      { slug: "googlegemini", label: "Gemini" },
      { slug: "openai", label: "ChatGPT", src: "/logos/openai.svg" },
      { slug: "perplexity", label: "Perplexity" },
    ],
  },
  {
    label: "AI design specialists",
    desc: "Generative imagery, video, and brand work",
    tools: [
      { slug: "huggingface", label: "Hugging Face" },
      { slug: "framer", label: "Framer" },
      { slug: "python", label: "Python" },
    ],
  },
];

export function CreatorTypes() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <h2 className="max-w-5xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
        If this is you, we want to hear from you.
      </h2>
      <ul className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-paper/[0.08] bg-paper/[0.08] sm:grid-cols-2 lg:grid-cols-3">
        {types.map((t, i) => (
          <motion.li
            key={t.label}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group flex min-h-[12rem] flex-col justify-between gap-8 bg-ink p-7 transition-colors hover:bg-ink-900"
          >
            <div className="flex items-center gap-3">
              {t.tools.map((tool) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={tool.slug}
                  src={"src" in tool ? tool.src : `https://cdn.simpleicons.org/${tool.slug}/F4F1EC`}
                  alt={tool.label}
                  title={tool.label}
                  width={20}
                  height={20}
                  loading="lazy"
                  className="h-5 w-5 opacity-40 transition group-hover:opacity-90"
                />
              ))}
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight text-paper transition-colors group-hover:text-ember sm:text-2xl">
                {t.label}
              </h3>
              <p className="mt-2 text-base text-paper/55">{t.desc}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

const briefFields = [
  { icon: Briefcase, label: "Industry", value: "Home services" },
  { icon: Wallet, label: "Budget", value: "$3-5k" },
  { icon: Clock, label: "Timeline", value: "3 weeks" },
];

const briefTools = [
  { slug: "n8n", label: "n8n" },
  { slug: "hubspot", label: "HubSpot" },
  { slug: "elevenlabs", label: "ElevenLabs" },
];

/** Hero visual for creators: the same brief the homepage matcher shows, seen from the creator's inbox. */
export function CreatorBriefCard() {
  return (
    <div className="relative h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-ember/10 blur-3xl"
      />
      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-paper/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-paper/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-paper">
            <Inbox className="h-4 w-4 text-ember" strokeWidth={2} aria-hidden />
            New brief
          </div>
          <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-semibold text-ink">
            Matched to you
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 pb-6 pt-5 sm:px-6">
          <p className="text-xs font-medium text-paper/45">Client brief</p>
          <p className="mt-2 font-display text-xl font-medium leading-snug text-paper sm:text-2xl">
            Automate lead follow-up for my plumbing business so no call goes unanswered.
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-2">
            {briefFields.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-paper/[0.07] bg-paper/[0.03] p-3"
              >
                <dt className="flex items-center gap-1.5 text-xs text-paper/50">
                  <Icon className="h-3.5 w-3.5 text-ember" strokeWidth={2} aria-hidden />
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-paper">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-paper/[0.07] bg-paper/[0.03] px-4 py-3">
            <span className="text-xs text-paper/50">Suggested stack</span>
            <div className="flex items-center gap-2.5">
              {briefTools.map((t) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={t.slug}
                  src={`https://cdn.simpleicons.org/${t.slug}/F4F1EC`}
                  alt={t.label}
                  title={t.label}
                  width={16}
                  height={16}
                  className="h-4 w-4 opacity-60"
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 text-xs text-paper/50">
            <span>Illustrative example</span>
            <span
              aria-hidden
              className="rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink"
            >
              Reply to brief
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
