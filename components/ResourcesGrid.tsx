"use client";

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
      <input
        id="resource-search"
        type="search"
        placeholder="Search topics, industries, or tools..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full min-h-12 rounded-xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 outline-none ring-2 ring-transparent transition placeholder:text-neutral-400 focus:border-accent focus:ring-accent/20 sm:min-h-14 sm:px-5 sm:py-4"
      />
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
        {resourceFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`min-h-[40px] shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
              filter === f
                ? "bg-neutral-900 text-white"
                : "bg-white text-neutral-600 ring-1 ring-neutral-200 hover:bg-neutral-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {filtered.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-base text-neutral-500">
          Nothing in this category yet. Try &ldquo;All.&rdquo;
        </p>
      ) : null}
    </>
  );
}
