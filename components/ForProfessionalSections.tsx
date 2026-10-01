"use client";

import { Lightbulb, Newspaper, Target, Zap } from "lucide-react";

const briefingRows = [
  {
    icon: Zap,
    label: "What changed",
    text: "Turning one prompt into a full campaign brief is now routine.",
  },
  {
    icon: Target,
    label: "What it means for you",
    text: "Your edge moves from writing first drafts to directing and judging them.",
  },
  {
    icon: Lightbulb,
    label: "Try this week",
    text: "Run last month's report through Claude and compare it to your version.",
  },
];

/** Hero visual for professionals: a sample weekly briefing, tailored to a role. */
export function ProfessionalBriefingCard() {
  return (
    <div className="relative h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-ember/10 blur-3xl"
      />
      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-paper/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-paper/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-paper">
            <Newspaper className="h-4 w-4 text-ember" strokeWidth={2} aria-hidden />
            Weekly AI briefing
          </div>
          <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-semibold text-ink">
            Marketing
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 pb-6 pt-5 sm:px-6">
          <p className="text-xs font-medium text-paper/45">This week, for your role</p>
          <p className="mt-2 font-display text-xl font-medium leading-snug text-paper sm:text-2xl">
            Your team can ship in hours what used to take weeks. Here&apos;s how to lead it.
          </p>

          <ul className="mt-6 space-y-2">
            {briefingRows.map(({ icon: Icon, label, text }) => (
              <li
                key={label}
                className="flex gap-3 rounded-2xl border border-paper/[0.07] bg-paper/[0.03] p-3.5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ember/15">
                  <Icon className="h-4 w-4 text-ember" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-paper/50">{label}</p>
                  <p className="mt-0.5 text-sm leading-snug text-paper/85">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4 text-xs text-paper/50">
            <span>Illustrative example</span>
            <span
              aria-hidden
              className="rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink"
            >
              Read the full briefing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
