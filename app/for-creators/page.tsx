import { CreatorBenefits, CreatorBriefCard, CreatorTypes } from "@/components/ForCreatorSections";
import { FadeIn } from "@/components/FadeIn";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { Steps } from "@/components/site/Steps";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PLATFORM_NAME, WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For AI Creators & Agencies",
  description:
    "Apply to join Envowl's vetted creator network. Get inbound briefs from clients ready to hire, plus a reputation that does the selling. Join the waitlist.",
  path: "/for-creators",
});

const benefits = [
  {
    title: "Qualified leads",
    copy: `Clients come to ${PLATFORM_NAME} already looking for AI help, with a brief and a budget in hand. No more explaining from zero.`,
  },
  {
    title: "Vetted reputation",
    copy: `An ${PLATFORM_NAME} badge tells clients you've been vetted. We only list creators we trust.`,
  },
  {
    title: "Tools to close",
    copy: "Structured briefs, direct messaging, and client reviews so every engagement starts clean.",
  },
];

const steps = [
  {
    title: "Apply and get listed",
    body: "Submit your portfolio and a short intro. A real person reviews every application, and you'll hear back either way. If you're approved, your profile goes live when we launch.",
    details: ["Portfolio review", "Brief intro call", "Past work verification"],
  },
  {
    title: "Inbound briefs land in your inbox",
    body: "Clients find you by use case, not keyword luck. You receive a structured brief before any conversation starts. No cold pitching, no scope guessing.",
    details: ["Structured briefs", "Budgets up front", "No cold outreach"],
  },
  {
    title: "Close on your terms",
    body: "Name your rate. Set your availability. Talk to clients directly through the platform.",
    details: ["Your rates", "Your availability", "Direct messaging"],
  },
];

export default function ForCreatorsPage() {
  return (
    <>
      <PageHero
        aside={<CreatorBriefCard />}
        eyebrow="For creators"
        title={
          <>
            Your next client is <span className="text-ember">already looking for you.</span>
          </>
        }
        description={`${PLATFORM_NAME} is a curated marketplace for vetted AI creators, agencies, and freelancers, built to put real briefs in front of the people who can deliver them.`}
      >
        <WaitlistForm
          align="left"
          defaultType="creator"
          source="for-creators-hero"
          buttonLabel="Apply as a creator"
          microcopy={WAITLIST_MICROCOPY_SHORT}
        />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="max-w-none font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-[clamp(2.25rem,3.8vw,3.125rem)]">
            You&apos;re great at AI.{" "}
            <br className="hidden sm:block" />
            <span className="text-paper/35">Sales is a different skill.</span>
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <p className="max-w-2xl text-lg leading-relaxed text-paper/65">
              Most AI creators and agencies are light-years ahead of their
              potential clients. The challenge isn&apos;t the work. It&apos;s
              finding people who understand the value of what you do, are ready
              to invest, and won&apos;t waste your time with scope creep and
              ghosting.
            </p>
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-paper sm:text-3xl lg:text-4xl">
              We build the demand.{" "}
              <br className="hidden lg:block" />
              <span className="text-ember">You close the deal.</span>
            </p>
          </div>
        </FadeIn>
      </section>

      <Steps heading="What it looks like once you're in." steps={steps} />
      <CreatorBenefits benefits={benefits} />
      <CreatorTypes />

      <CtaBand
        descriptionClassName="max-w-2xl"
        title={
          <>
            We don&apos;t list everyone.
            <br />
            <span className="text-ember">So being listed means something.</span>
          </>
        }
        description={`To be listed on ${PLATFORM_NAME}, creators will go through a portfolio review, a brief intro call, and verification of past client work. We're not looking for perfection. We're looking for people who deliver what they promise.`}
      >
        <WaitlistForm
          buttonLabel="Start your application"
          defaultType="creator"
          microcopy={WAITLIST_MICROCOPY_SHORT}
          source="for-creators-vetting"
        />
      </CtaBand>
    </>
  );
}
