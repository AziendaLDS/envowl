"use client";

import { BadgeCheck, Check } from "lucide-react";

const criteria = [
  {
    label: "Portfolio quality",
    evidence: "Live systems reviewed, with real client results behind them.",
  },
  {
    label: "Delivery credibility",
    evidence: "Past projects verified. Did they finish, and did clients return?",
  },
  {
    label: "Scope fit",
    evidence: "Has built lead follow-up and CRM automations for home services.",
  },
];

/** Hero visual for Platform: one creator application moving through the three review criteria. */
export function VettingReviewCard() {
  return (
    <div className="relative h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-ember/10 blur-3xl"
      />
      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-paper/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-paper/[0.08] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-paper">
            <BadgeCheck className="h-4 w-4 text-ember" strokeWidth={2} aria-hidden />
            Creator review
          </div>
          <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-semibold text-ink">
            Reviewed manually
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 pb-6 pt-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper font-display text-sm font-bold text-ink"
            >
              AR
            </div>
            <div className="min-w-0">
              <p className="text-base font-semibold text-paper">Alex Rivera</p>
              <p className="text-sm text-paper/55">Automation engineer</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2">
            {criteria.map((c) => (
              <li
                key={c.label}
                className="flex gap-3 rounded-2xl border border-paper/[0.07] bg-paper/[0.03] p-3.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-ink">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-paper">{c.label}</p>
                  <p className="mt-0.5 text-sm leading-snug text-paper/60">{c.evidence}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between gap-4 text-xs text-paper/50">
            <span>Illustrative example, not a real creator</span>
            <span
              aria-hidden
              className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink"
            >
              <BadgeCheck className="h-4 w-4" strokeWidth={2} />
              Listed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
