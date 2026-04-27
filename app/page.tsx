import { AudienceSplit } from "@/components/AudienceSplit";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import Link from "next/link";
import { ProblemSection } from "@/components/ProblemSection";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";
import { faqSchema } from "@/lib/schema";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  pageMetadata,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

const homeFaq = [
  {
    question: "What is Envowl?",
    answer:
      "Envowl is a curated AI talent marketplace that helps businesses and professionals find vetted AI experts, and helps qualified creators find better-fit projects.",
  },
  {
    question: "Who is Envowl for?",
    answer:
      "Envowl serves businesses adopting AI, professionals upskilling with AI, and creators or agencies delivering practical AI outcomes.",
  },
  {
    question: "How is Envowl different from a freelancer directory?",
    answer:
      "Envowl emphasizes vetting, trust, and educational content so buyers can make informed hiring decisions and creators can work with qualified leads.",
  },
];

const homeFaqSchema = faqSchema(homeFaq);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <Hero>
        <WaitlistForm
          defaultType="client"
          source="homepage"
          microcopyTone="onDark"
          microcopySpacing="tight"
          microcopy={WAITLIST_MICROCOPY_SHORT}
        />
      </Hero>
      <ProblemSection />
      <HowItWorks />
      <AudienceSplit />
      <ResourcesPreview />
      <section className="border-b border-neutral-200 bg-[#ebebeb] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 sm:px-6 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 space-y-6">
            {homeFaq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-neutral-900">{item.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">{item.answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-neutral-600">
            Looking for a full product breakdown? Visit{" "}
            <Link href="/platform" className="font-semibold text-accent hover:underline">
              the Envowl platform overview
            </Link>
            .
          </p>
        </div>
      </section>
      <WaitlistCTA />
    </>
  );
}
