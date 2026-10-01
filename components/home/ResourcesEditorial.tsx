import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export function ResourcesEditorial() {
  const [feature, ...rest] = articles.slice(0, 4);
  if (!feature) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
          Free resources.
          <br />
          <span className="text-ember">Use them.</span>
        </h2>
        <Link
          href="/resources"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-paper/70 transition hover:text-paper"
        >
          Browse all resources
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden />
        </Link>
      </div>

      <div className="mt-12 grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        <Link
          href={`/resources/${feature.slug}`}
          className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[20px] border border-paper/[0.08] bg-gradient-to-br from-ember/25 via-ink-900 to-ink-900 p-7 transition hover:border-ember/40 sm:p-10"
        >
          <div className="flex items-center justify-between text-sm text-paper/60">
            <span className="font-medium text-ember">{feature.tag}</span>
            <span>{feature.readTime}</span>
          </div>
          <div>
            <h3 className="max-w-xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.02em] text-paper sm:text-4xl">
              {feature.title}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-paper/60 line-clamp-2">
              {feature.teaser}
            </p>
            <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper text-ink transition group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} aria-hidden />
            </span>
          </div>
        </Link>

        <ul className="flex flex-col gap-3">
          {rest.map((a) => (
            <li key={a.slug} className="flex-1">
              <Link
                href={`/resources/${a.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-[20px] border border-paper/[0.08] p-6 transition hover:border-paper/20 hover:bg-paper/[0.03]"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-paper/50">{a.tag}</span>
                  <ArrowUpRight
                    className="h-5 w-5 text-paper/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-paper">
                  {a.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
