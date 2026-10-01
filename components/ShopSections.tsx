"use client";

import { Copy } from "lucide-react";

const skeletonWidths = ["w-full", "w-[92%]", "w-[96%]", "w-[78%]", "w-[88%]", "w-[54%]"];

/** Hero visual for the shop: a free-pack prompt, with the full text left to the pack itself. */
export function SamplePromptCard() {
  return (
    <div className="relative h-full">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-ember/10 blur-3xl"
      />
      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-paper/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between gap-3 border-b border-paper/[0.08] px-5 py-4 sm:px-6">
          <p className="text-sm font-semibold text-paper">Sample prompt</p>
          <span className="rounded-full bg-ember px-2.5 py-0.5 text-xs font-semibold text-ink">
            Free pack
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 pb-6 pt-5 sm:px-6">
          <p className="font-display text-xl font-medium leading-snug text-paper sm:text-2xl">
            Explain It Like I Know Nothing About It
          </p>

          <p className="mt-5 text-xs font-medium text-paper/45">When to use it</p>
          <p className="mt-1.5 text-sm leading-snug text-paper/80">
            Any time you want to go from completely lost to genuinely understanding something.
          </p>

          <div className="mt-5 rounded-2xl border border-paper/[0.07] bg-paper/[0.03] p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-paper/45">The prompt</p>
              <span
                aria-hidden
                className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 px-3 py-1 text-xs font-semibold text-paper/70"
              >
                <Copy className="h-3 w-3" strokeWidth={2.25} />
                Copy
              </span>
            </div>
            <div aria-hidden className="mt-4 space-y-2.5">
              {skeletonWidths.map((w, i) => (
                <div key={i} className={`h-2.5 rounded-full bg-paper/[0.09] ${w}`} />
              ))}
            </div>
          </div>

          <p className="mt-5 text-sm text-paper/60">Works in Claude and ChatGPT.</p>

          <p className="mt-6 text-xs text-paper/45">
            Preview only. The full prompt comes with the pack.
          </p>
        </div>
      </div>
    </div>
  );
}
