import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function ArticleCard({
  article,
}: {
  article: Pick<Article, "slug" | "tag" | "title" | "teaser" | "readTime" | "date">;
}) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group flex h-full flex-col rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 transition hover:-translate-y-1 hover:border-ember/40"
    >
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-ember">{article.tag}</span>
        <ArrowUpRight
          className="h-5 w-5 text-paper/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember"
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-tight text-paper sm:text-2xl">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-paper/55 line-clamp-3">
        {article.teaser}
      </p>
      <div className="mt-6 flex items-center justify-between text-sm text-paper/45">
        <span>{article.readTime}</span>
        {article.date ? <span>{article.date}</span> : null}
      </div>
    </Link>
  );
}
