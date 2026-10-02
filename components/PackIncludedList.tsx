"use client";

import { Check } from "lucide-react";
import { useId, useState } from "react";

/** Prompt list for a shop card. Long lists collapse to `limit` items with a toggle. */
export function PackIncludedList({ items, limit = 6 }: { items: string[]; limit?: number }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const shown = open ? items : items.slice(0, limit);
  const collapsible = items.length > limit;

  return (
    <>
      <ul id={listId} className="mt-3 space-y-2.5 text-sm text-paper/75 sm:text-base">
        {shown.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check className="mt-1 h-4 w-4 shrink-0 text-ember" strokeWidth={2.5} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {collapsible ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={listId}
          className="-my-1 mt-4 inline-flex min-h-[44px] items-center self-start text-sm font-semibold text-ember underline decoration-2 underline-offset-4 transition hover:text-paper"
        >
          {open ? "Show fewer" : `See all ${items.length}`}
        </button>
      ) : null}
    </>
  );
}
