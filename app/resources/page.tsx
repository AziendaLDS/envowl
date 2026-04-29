import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { ResourcesNewsletter } from "@/components/ResourcesNewsletter";
import { ShootingStarsHeroBackground } from "@/components/ShootingStarsHeroBackground";
import { articles } from "@/lib/articles";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Resources & Guides",
  description:
    "Free guides, videos, and breakdowns for businesses and professionals who want to stay ahead with AI — from Envowl.",
  path: "/resources",
});

const resourceListSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Envowl AI Resources",
  hasPart: articles.map((article) => ({
    "@type": "Article",
    headline: article.title,
    url: `${SITE_URL}/resources/${article.slug}`,
    keywords: article.tag,
  })),
};

const resourceBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
]);

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([resourceListSchema, resourceBreadcrumbSchema]),
        }}
      />
      <section className="relative overflow-hidden bg-[#0a0a0a] py-16 text-white sm:py-24 md:py-36 min-h-[600px] flex items-center">    
       <ShootingStarsHeroBackground fadeVariant="lower" nextSectionBg="#ebebeb" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
          <FadeIn>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
              Resources
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              The AI resource library.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
              Practical guides for businesses, professionals, and anyone trying to
              keep up with where the world is going.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#ebebeb] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 md:px-8">
          <Suspense
            fallback={
              <div className="h-64 animate-pulse rounded-xl bg-neutral-200/70" />
            }
          >
            <ResourcesGrid />
          </Suspense>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-6 sm:px-6 md:px-8">
          <ResourcesNewsletter />
        </div>
      </section>
    </>
  );
}
