import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({
  article,
  compact = false,
}: {
  article: Pick<Article, "slug" | "tag" | "title" | "teaser" | "readTime" | "date">;
  compact?: boolean;
}) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-neutral-300 hover:shadow-md sm:p-8"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-accent">
        {article.tag}
      </p>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-700 sm:mt-4 sm:text-xl">
        {article.title}
      </h3>
      {!compact ? (
        <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-600 line-clamp-3">
          {article.teaser}
        </p>
      ) : null}
      <div className="mt-5 flex items-center justify-between text-sm text-neutral-500">
        <span>{article.readTime}</span>
        {article.date ? <span>{article.date}</span> : null}
      </div>
    </Link>
  );
}
