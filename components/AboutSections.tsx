"use client";

import { Check } from "lucide-react";

type Status = "live" | "next" | "planned";

const milestones: { title: string; desc: string; status: Status; tag: string }[] = [
  {
    title: "Waitlist open",
    desc: "Early access and founder pricing for the people who join first.",
    status: "live",
    tag: "Live",
  },
  {
    title: "Free resource library",
    desc: "Practical AI guides for businesses and professionals.",
    status: "live",
    tag: "Live",
  },
  {
    title: "Creator applications",
    desc: "Portfolio review, intro call, and verification of past work.",
    status: "next",
    tag: "Up next",
  },
  {
    title: "Marketplace launch",
    desc: "Vetted creators, structured briefs, and milestone delivery.",
    status: "planned",
    tag: "Summer 2027",
  },
];

/** Hero visual for About: where Envowl is today and what comes next. */
export function RoadmapCard() {
  return (
    <div className="relative h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-ember/10 blur-3xl"
      />
      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-paper/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-paper/[0.08] px-5 py-4 sm:px-6">
          <p className="text-sm font-semibold text-paper">Where we are</p>
          <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-semibold text-ink">
            Pre-launch
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 pb-6 pt-5 sm:px-6">
          <ol className="relative space-y-6">
            <span
              aria-hidden
              className="absolute bottom-3 left-[11px] top-3 w-px bg-paper/15"
            />
            {milestones.map((m) => (
              <li key={m.title} className="relative flex gap-4">
                <span
                  aria-hidden
                  className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    m.status === "live"
                      ? "bg-ember text-ink"
                      : m.status === "next"
                        ? "border-2 border-ember bg-ink-900"
                        : "border-2 border-paper/25 bg-ink-900"
                  }`}
                >
                  {m.status === "live" ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-display text-lg font-semibold tracking-tight text-paper">
                      {m.title}
                    </p>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        m.status === "live"
                          ? "bg-ember/15 text-ember"
                          : m.status === "next"
                            ? "border border-ember/50 text-ember"
                            : "border border-paper/20 text-paper/60"
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-paper/60">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-xs text-paper/45">
            Timing is a target, not a commitment.
          </p>
        </div>
      </div>
    </div>
  );
}
