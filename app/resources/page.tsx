import { Suspense } from "react";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { WaitlistForm } from "@/components/WaitlistForm";
import { articles } from "@/lib/articles";

import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Resources & Guides",
  description:
    "Free guides, videos, and breakdowns for businesses and professionals who want to stay ahead with AI, from Envowl.",
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
      <PageHero
        compact
        titleAbove
        titleClassName="text-[2.6rem] sm:text-[clamp(2.25rem,4.6vw,3.75rem)]"
        eyebrow="Resources"
        title={
          <>
            The AI resource library.
            <br />
            <span className="text-paper/35">Free. Use it.</span>
          </>
        }
        description="Practical guides for businesses, professionals, and anyone trying to keep up with where the world is going."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:px-8 md:pb-32">
        <Suspense
          fallback={<div className="h-64 animate-pulse rounded-[20px] bg-paper/[0.04]" />}
        >
          <ResourcesGrid />
        </Suspense>
      </section>

      <CtaBand
        title="Get the weekly AI briefing."
        description="One email, every week. What's happening in AI and what actually matters for your business or career. Subscribing also puts you on the Envowl waitlist."
      >
        <WaitlistForm
          buttonLabel="Subscribe"
          defaultType="client"
          microcopy="Free. Unsubscribe anytime."
          source="resources-newsletter"
        />
      </CtaBand>
    </>
  );
}
