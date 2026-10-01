import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TrustSection, UseCaseCategories } from "@/components/ForBusinessSections";
import { FadeIn } from "@/components/FadeIn";
import { BriefMatcher } from "@/components/home/BriefMatcher";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Steps } from "@/components/site/Steps";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PLATFORM_NAME, WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { BUTTON_PRIMARY_CLASS } from "@/lib/subscribe-classes";

export const metadata = pageMetadata({
  title: "Hire Vetted AI Experts for Your Business",
  description:
    "Find vetted AI experts who understand your industry and budget. Envowl helps businesses avoid costly mismatches. Join the waitlist for early access.",
  path: "/for-businesses",
});

const pills = [
  "Small business owners",
  "Operations and marketing teams",
  "Founders and solo operators",
];

const steps = [
  {
    title: "Tell us your problem",
    body: "Fill out a short brief: your industry, what you want to automate or build, and your rough budget. No technical knowledge required.",
    details: ["Plain-English brief", "5 minutes", "No jargon"],
  },
  {
    title: "Get matched with vetted creators",
    body: "We'll surface 2-3 creators who have solved your exact problem before, with real portfolios and honest reviews from past clients. No guessing who's legit.",
    details: ["2-3 matches", "Proven track record", "Past-client reviews"],
  },
  {
    title: "Hire with confidence",
    body: "Start your project, message the creator directly, and move fast. Every creator on Envowl is reviewed manually before they're listed.",
    details: ["Direct messaging", "Milestone delivery", "Human-reviewed"],
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <PageHero
        aside={<BriefMatcher fill />}
                titleClassName="text-[2.6rem] sm:text-6xl lg:text-[3.5rem] xl:text-[4.5rem]"

        eyebrow="For businesses"
        title={
          <>
            AI for your business,{" "}
            <span className="text-ember">without&nbsp;the guesswork.</span>
          </>
        }
        description="Find a vetted AI expert who understands your industry, your budget, and your actual problem. Not just the tech."
      >
        <WaitlistForm
          align="left"
          defaultType="client"
          source="for-businesses-hero"
          microcopy={WAITLIST_MICROCOPY_SHORT}
        />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="max-w-none font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-[clamp(2.25rem,5.4vw,4.5rem)]">
            You don&apos;t need{" "}
            <br className="hidden sm:block" />
            to understand AI.{" "}
            <br className="hidden sm:block" />
            <span className="text-paper/35">You need results.</span>
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <p className="max-w-2xl text-lg leading-relaxed text-paper/65">
            Whether you&apos;re automating the admin, scaling your content, or following up with leads faster, {PLATFORM_NAME} will connect you with someone who&apos;s done it before.
          </p>
            <ul className="flex flex-wrap content-start gap-2">
            {pills.map((p) => (
              <li
                key={p}
                className="rounded-full border border-paper/15 bg-paper/[0.03] px-4 py-2 text-sm font-medium text-paper/80"
              >
                {p}
              </li>
            ))}
          </ul>
          </div>
        </FadeIn>
      </section>

      <Steps
        heading={
          <>
            From problem to solution
            <br className="hidden sm:block" /> in three steps.
          </>
        }
        headingClassName="max-w-none sm:text-[clamp(1.75rem,4.3vw,3.5rem)]"
        steps={steps}
      />
      <UseCaseCategories />
      <TrustSection platformName={PLATFORM_NAME} />

      <CtaBand
        title="Not ready to hire yet? Start here."
        description="Browse our free library of guides and industry breakdowns. Get smart on AI before you spend a dollar."
      >
        <Link href="/resources" className={`group ${BUTTON_PRIMARY_CLASS}`}>
          Browse free resources
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} aria-hidden />
        </Link>
      </CtaBand>
    </>
  );
}
