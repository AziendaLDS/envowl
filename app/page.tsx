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
      "Envowl is a curated AI talent marketplace. Businesses find vetted experts to implement AI the right way. Professionals get trusted guidance to stay ahead as their roles evolve. Creators and agencies get qualified leads from buyers who already understand the value of what they do.",
  },
  {
    question: "Who is Envowl for?",
    answer:
      "Businesses that are adopting AI and need people who've actually done it before. Professionals whose roles are changing faster than their training is - and who want real guidance, not just courses. And creators or agencies who are tired of competing on price against people with no track record.",
  },
  {
    question: "How is Envowl different from a freelancer directory?",
    answer:
      "A directory will show you everyone. Envowl shows you who's actually good. Every creator is reviewed before they're listed - portfolio, delivery history, scope fit. We turn down a lot of applications. That's not gatekeeping, that's the whole product. Buyers waste less time. Creators get better clients. That doesn't happen in an open marketplace.",
  },
  {
    question: "How does the vetting process work?",
    answer:
      "Every creator application is manually reviewed against three criteria: portfolio quality, delivery credibility, and scope fit. We don't approve everyone - that's the point.",
  },
  {
    question: "Is Envowl free to use as a business?",
    answer:
      "Browsing and posting is free. You only pay when you're ready to engage a creator. The resources section is also free - practical AI guidance you can use whether you hire anyone or not.",
  },
  {
    question: "Can I use Envowl if I don't know exactly what I need?",
    answer:
      "That's actually the best time to start. Vague briefs become sharp projects when the right people are involved. Post what you've got and the conversations that follow will result in the best work.",
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
          <div className="mt-8 space-y-4">
            {homeFaq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-neutral-200 bg-white px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <h3 className="text-lg font-semibold text-neutral-900">{item.question}</h3>
                  <span
                    aria-hidden
                    className="mt-0.5 text-xl leading-none text-neutral-500 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{item.answer}</p>
              </details>
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
