import Link from "next/link";
import { Audiences } from "@/components/home/Audiences";
import { VettingReviewCard } from "@/components/PlatformSections";
import { PageHero } from "@/components/site/PageHero";
import { Steps } from "@/components/site/Steps";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

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

const steps = [
  {
    title: "Creators apply and get vetted",
    body: "Every creator submits a portfolio and goes through a manual review: portfolio quality, delivery credibility, and scope fit. Only the ones who pass get listed.",
    details: ["Portfolio review", "Intro call", "Past work verification"],
  },
  {
    title: "Businesses describe the problem",
    body: "Write a short brief in plain English with your goal, budget, and timeline. We match you with the 2-3 creators who have solved something like it before.",
    details: ["Plain-English brief", "2-3 matches", "No jargon"],
  },
  {
    title: "The work happens in milestones",
    body: "Message the creator directly, agree on scope, and move through milestone-based delivery. Clients leave reviews, so the next buyer knows who to trust.",
    details: ["Direct messaging", "Milestone delivery", "Past-client reviews"],
  },
];

const inlineLink =
  "font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember";

export default function PlatformPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PLATFORM_BREADCRUMB) }}
      />
      <PageHero
        aside={<VettingReviewCard />}
        titleClassName="text-[2.6rem] sm:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]"
        eyebrow="Platform overview"
        title="What Envowl is and how it works."
        description="Most businesses don't fail at AI because the technology isn't ready. They fail because they can't find people who know how to use it. Envowl is a curated AI talent marketplace, launching Summer 2027, where vetted creators meet the businesses and professionals who need real outcomes."
      />

      <Audiences />

      <Steps heading="How a project comes together." steps={steps} />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:px-8 md:pb-32">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-10">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              How vetting and trust work
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/65">
              Anyone can call themselves an AI expert right now. Envowl
              doesn&apos;t work that way. Every creator is reviewed manually for
              portfolio quality, delivery track record, and scope fit before
              they&apos;re ever shown to a buyer. Less wasted time on both sides, and better
              outcomes on every engagement.
            </p>
          </div>
          <div className="dot-field flex flex-col justify-between rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-10">
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
              Where we are
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-paper/65">
              The waitlist and resource library are live today, and the marketplace
              opens Summer 2027. Explore the{" "}
              <Link href="/resources" className={inlineLink}>
                resource library
              </Link>{" "}
              for practical AI guidance, or read{" "}
              <Link href="/about" className={inlineLink}>
                the Envowl thesis
              </Link>{" "}
              behind this marketplace.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
