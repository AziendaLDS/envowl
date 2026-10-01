"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type Match = {
  name: string;
  role: string;
  tools: { slug: string; label: string }[];
  rate: string;
};

type Brief = {
  tab: string;
  text: string;
  matches: Match[];
};

/** Illustrative examples of the matching flow (not real listings). */
const BRIEFS: Brief[] = [
  {
    tab: "Lead follow-up",
    text: "Automate lead follow-up for my plumbing business so no call goes unanswered.",
    matches: [
      {
        name: "Marisol Ortega",
        role: "Automation engineer",
        tools: [
          { slug: "n8n", label: "n8n" },
          { slug: "hubspot", label: "HubSpot" },
          { slug: "elevenlabs", label: "ElevenLabs" },
        ],
        rate: "$85-110/hr",
      },
      {
        name: "Tomasz Wilk",
        role: "Voice agent builder",
        tools: [
          { slug: "elevenlabs", label: "ElevenLabs" },
          { slug: "anthropic", label: "Anthropic" },
          { slug: "zapier", label: "Zapier" },
        ],
        rate: "$70-95/hr",
      },
      {
        name: "Priya Raman",
        role: "CRM and AI consultant",
        tools: [
          { slug: "hubspot", label: "HubSpot" },
          { slug: "make", label: "Make" },
          { slug: "claude", label: "Claude" },
        ],
        rate: "$90-130/hr",
      },
    ],
  },
  {
    tab: "Docs assistant",
    text: "Build an internal assistant that answers staff questions from our SOPs and docs.",
    matches: [
      {
        name: "Daniel Achterberg",
        role: "RAG engineer",
        tools: [
          { slug: "langchain", label: "LangChain" },
          { slug: "supabase", label: "Supabase" },
          { slug: "anthropic", label: "Anthropic" },
        ],
        rate: "$110-150/hr",
      },
      {
        name: "Imani Okafor",
        role: "AI product developer",
        tools: [
          { slug: "vercel", label: "Vercel" },
          { slug: "claude", label: "Claude" },
          { slug: "notion", label: "Notion" },
        ],
        rate: "$95-125/hr",
      },
      {
        name: "Lucía Ferrer",
        role: "ML engineer",
        tools: [
          { slug: "huggingface", label: "Hugging Face" },
          { slug: "python", label: "Python" },
          { slug: "mistralai", label: "Mistral AI" },
        ],
        rate: "$100-140/hr",
      },
    ],
  },
  {
    tab: "Team training",
    text: "Teach my marketing team to actually use AI every day, not just talk about it.",
    matches: [
      {
        name: "Jordan Blake",
        role: "AI workflow trainer",
        tools: [
          { slug: "claude", label: "Claude" },
          { slug: "googlegemini", label: "Gemini" },
          { slug: "notion", label: "Notion" },
        ],
        rate: "$75-100/hr",
      },
      {
        name: "Hana Sato",
        role: "Content systems lead",
        tools: [
          { slug: "make", label: "Make" },
          { slug: "airtable", label: "Airtable" },
          { slug: "perplexity", label: "Perplexity" },
        ],
        rate: "$80-105/hr",
      },
      {
        name: "Ravi Deshmukh",
        role: "Marketing ops consultant",
        tools: [
          { slug: "zapier", label: "Zapier" },
          { slug: "claude", label: "Claude" },
          { slug: "airtable", label: "Airtable" },
        ],
        rate: "$85-115/hr",
      },
    ],
  },
];

const AVATAR_TONES = [
  "bg-ember text-ink",
  "bg-paper text-ink",
  "bg-ink-600 text-paper",
];

type Phase = "typing" | "matching" | "done";

const TYPE_MS = 28;
const MATCH_MS = 900;
const HOLD_MS = 5200;

export function BriefMatcher({ fill = false }: { fill?: boolean }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [autoplay, setAutoplay] = useState(true);

  const brief = BRIEFS[index];

  // Typing -> matching -> done, then advance to the next brief while autoplaying.
  useEffect(() => {
    if (reduce) {
      setChars(brief.text.length);
      setPhase("done");
      return;
    }
    if (phase === "typing") {
      if (chars >= brief.text.length) {
        const t = setTimeout(() => setPhase("matching"), 250);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
    if (phase === "matching") {
      const t = setTimeout(() => setPhase("done"), MATCH_MS);
      return () => clearTimeout(t);
    }
    if (phase === "done" && autoplay) {
      const t = setTimeout(() => select((index + 1) % BRIEFS.length, false), HOLD_MS);
      return () => clearTimeout(t);
    }
  }, [phase, chars, brief.text.length, reduce, autoplay, index]);

  function select(i: number, manual = true) {
    if (manual) setAutoplay(false);
    setIndex(i);
    setChars(0);
    setPhase("typing");
  }

  return (
    <div className={`relative w-full ${fill ? "h-full" : ""}`}>
      <div className={`relative overflow-hidden rounded-[20px] border border-paper/10 bg-ink-900/90 shadow-[0_40px_120px_-40px_rgb(245_73_39_/_0.35)] backdrop-blur ${fill ? "flex h-full flex-col" : ""}`}>
        <div className="flex items-center gap-3 border-b border-paper/[0.08] px-3 py-3 sm:px-4">
          <Sparkles className="ml-1 h-4 w-4 shrink-0 text-ember" strokeWidth={2} aria-hidden />
          <div
            role="tablist"
            aria-label="Example briefs"
            className="flex min-w-0 gap-1 overflow-x-auto rounded-full bg-paper/[0.04] p-1 [scrollbar-width:none]"
          >
            {BRIEFS.map((b, i) => (
              <button
                key={b.tab}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => select(i)}
                className={`relative whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  i === index ? "text-ink" : "text-paper/60 hover:text-paper"
                }`}
              >
                {i === index ? (
                  <motion.span
                    layoutId="brief-tab"
                    className="absolute inset-0 rounded-full bg-paper"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{b.tab}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={`px-4 pb-5 pt-5 sm:px-6 sm:pb-6 ${fill ? "flex-1" : ""}`}>
          <p className="text-xs font-medium text-paper/45">Your brief</p>
          <p className="mt-2 min-h-[3.5rem] font-display text-lg font-medium leading-snug text-paper sm:text-xl">
            {brief.text.slice(0, chars)}
            {phase === "typing" ? (
              <span className="caret ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] bg-ember" />
            ) : null}
          </p>

          <div className="mt-5 flex items-center justify-between gap-4 text-xs text-paper/50">
            <span aria-live="polite">
              {phase === "done"
                ? `${brief.matches.length} vetted creators matched`
                : phase === "matching"
                  ? "Matching against vetted creators…"
                  : "Describe it in plain English"}
            </span>
            <span className="shrink-0">Illustrative example, not real creators</span>
          </div>

          <div className="mt-3 flex flex-col gap-2">
            {phase === "done" ? (
              <AnimatePresence mode="popLayout">
                {brief.matches.map((m, i) => (
                  <motion.div
                    key={`${index}-${m.name}`}
                    initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: i * 0.09, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center gap-3 rounded-2xl border border-paper/[0.07] bg-paper/[0.03] p-3 transition hover:border-ember/40 hover:bg-paper/[0.05]"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${AVATAR_TONES[i % AVATAR_TONES.length]}`}
                      aria-hidden
                    >
                      {m.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="truncate text-sm font-semibold text-paper">{m.name}</span>
                        <BadgeCheck className="h-4 w-4 shrink-0 text-ember" strokeWidth={2} aria-label="Vetted" />
                      </div>
                      <p className="truncate text-xs text-paper/55">{m.role}</p>
                    </div>
                    <div className="hidden items-center gap-1.5 sm:flex">
                      {m.tools.map((t) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={t.slug}
                          src={`https://cdn.simpleicons.org/${t.slug}/F4F1EC`}
                          alt={t.label}
                          title={t.label}
                          width={16}
                          height={16}
                          loading="lazy"
                          className="h-4 w-4 opacity-60 transition group-hover:opacity-90"
                        />
                      ))}
                    </div>
                    <span className="shrink-0 font-mono text-xs text-paper/70">{m.rate}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              [0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-2xl border border-paper/[0.05] p-3 ${
                    phase === "matching" ? "animate-pulse" : "opacity-40"
                  }`}
                  aria-hidden
                >
                  <div className="h-10 w-10 rounded-full bg-paper/[0.07]" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2.5 w-2/5 rounded-full bg-paper/[0.08]" />
                    <div className="h-2 w-1/4 rounded-full bg-paper/[0.06]" />
                  </div>
                  <div className="h-2.5 w-16 rounded-full bg-paper/[0.06]" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
