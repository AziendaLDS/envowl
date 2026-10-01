"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import {
  articleMatchesFilter,
  articles,
  resourceFilters,
} from "@/lib/articles";

function matchesQuery(
  q: string,
  title: string,
  teaser: string,
  tag: string,
) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  return (
    title.toLowerCase().includes(s) ||
    teaser.toLowerCase().includes(s) ||
    tag.toLowerCase().includes(s)
  );
}

export function ResourcesGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          articleMatchesFilter(a, filter) &&
          matchesQuery(query, a.title, a.teaser, a.tag),
      ),
    [filter, query],
  );

  return (
    <>
      <label className="sr-only" htmlFor="resource-search">
        Search resources
      </label>
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-paper/40"
          strokeWidth={2}
          aria-hidden
        />
        <input
          id="resource-search"
          type="search"
          placeholder="Search topics, industries, or tools..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-h-14 w-full rounded-full border border-paper/15 bg-ink-800 py-3.5 pl-14 pr-5 text-base text-paper outline-none transition placeholder:text-paper/45 focus:border-ember focus:ring-4 focus:ring-ember/20"
        />
      </div>
      <div
        role="group"
        aria-label="Filter by topic"
        className="mt-5 flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] md:flex-wrap md:overflow-visible"
      >
        {resourceFilters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-[44px] shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
              filter === f
                ? "bg-paper text-ink"
                : "border border-paper/15 text-paper/65 hover:border-paper/30 hover:text-paper"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[20px] border border-dashed border-paper/15 px-6 py-16 text-center">
          <p className="font-display text-2xl font-semibold text-paper">Nothing here yet.</p>
          <p className="mt-2 text-base text-paper/55">
            Try another topic, or clear your search to see everything.
          </p>
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="mt-6 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold text-paper transition hover:border-paper/40"
          >
            Show all resources
          </button>
        </div>
      ) : null}
    </>
  );
}
