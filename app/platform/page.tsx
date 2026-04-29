import Link from "next/link";
import { PlatformAudienceCards } from "@/components/PlatformAudienceCards";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "What Is Envowl? Platform Overview",
  description:
    "Understand exactly what Envowl is, who it is for, how vetting works, and how businesses and AI creators use the platform.",
  path: "/platform",
});

const PLATFORM_BREADCRUMB = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Platform", path: "/platform" },
]);

export default function PlatformPage() {
  return (
    <article className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PLATFORM_BREADCRUMB) }}
      />
      <div className="mx-auto max-w-4xl px-6 sm:px-6 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Platform overview
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
          What Envowl is and how it works
        </h1>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
          Most businesses don't fail at AI because the technology isn't ready. They
          fail because they can't find people who actually know how to use it.
          Envowl is a curated AI talent marketplace - where vetted creators and
          agencies connect with businesses and professionals who need real outcomes,
          not just deliverables.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Who Envowl serves
          </h2>
          <PlatformAudienceCards />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            How vetting and trust work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Anyone can call themselves an AI expert right now. Envowl doesn't work
            that way. Every creator on the platform is reviewed for portfolio
            quality, delivery track record, and fit before they're ever surfaced to
            a buyer. That means less wasted time on both sides - and better outcomes
            on every engagement.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Learn more
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Explore the{" "}
            <Link href="/resources" className="font-semibold text-accent hover:underline">
              resource library
            </Link>{" "}
            for practical AI guidance, or read{" "}
            <Link href="/about" className="font-semibold text-accent hover:underline">
              the Envowl thesis
            </Link>{" "}
            behind this marketplace.
          </p>
          <p className="mt-6 text-sm text-neutral-500">
            Canonical source: {SITE_URL}/platform
          </p>
        </section>
      </div>
    </article>
  );
}
