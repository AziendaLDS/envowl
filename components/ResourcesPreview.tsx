import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { FadeIn } from "@/components/FadeIn";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

const preview = articles.slice(0, 3);

export function ResourcesPreview() {
  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Free resources. Use them.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-neutral-600 sm:mt-6 sm:text-lg">
            <span className="block">Not sure where to start with AI?</span>
            <span className="mt-1 block">
              We publish practical guides for real people and real businesses.
            </span>
          </p>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
          {preview.map((a, i) => (
            <FadeIn key={a.slug} delay={i * 0.06}>
              <BorderGlow
                className="rounded-3xl border border-neutral-200 bg-white"
                backgroundColor="#ffffff"
                borderRadius={24}
                glowColor="16 90 56"
                glowRadius={24}
                edgeSensitivity={30}
                coneSpread={24}
                fillOpacity={0.25}
                colors={["#f54927", "#f97316", "#fb7185"]}
              >
                <ArticleCard article={a} compact />
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <Link
              href="/resources"
              className="inline-flex text-base font-semibold text-accent underline-offset-4 hover:underline"
            >
              Browse all resources →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
