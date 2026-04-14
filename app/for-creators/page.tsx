import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PLATFORM_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For AI Creators & Agencies",
  description:
    "Join Envowl's vetted creator network. Get qualified leads, a trusted reputation, and tools to close more AI projects — apply to the waitlist.",
  path: "/for-creators",
});

const benefits = [
  {
    title: "Qualified leads",
    copy: `Clients on ${PLATFORM_NAME} have been educated on what AI can and can't do. No more explaining from zero.`,
  },
  {
    title: "Vetted reputation",
    copy: `A ${PLATFORM_NAME} badge signals credibility. We only list creators we trust.`,
  },
  {
    title: "Tools to close",
    copy:
      "Client project briefs, messaging tools, and review infrastructure so every engagement starts clean.",
  },
];

export default function ForCreatorsPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-[#0a0a0a] py-16 text-white sm:py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
          <FadeIn>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Your next client is already looking for you.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
              {PLATFORM_NAME} is a curated marketplace for vetted AI creators,
              agencies, and freelancers. We handle the demand — you handle the
              delivery.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto mt-12 max-w-2xl">
              <WaitlistForm
                defaultType="creator"
                source="for-creators-hero"
                microcopyTone="onDark"
                buttonLabel="Apply to Join the Creator Waitlist"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-6 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              You&apos;re great at AI.
              <br />
              Sales is a different skill.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 sm:mt-8 sm:space-y-5 sm:text-lg">
              <p>
                Most AI creators and agencies are light-years ahead of their
                potential clients.
                <br />
                The challenge isn&apos;t the work — it&apos;s finding the people
                who understand the value of what you do, are ready to invest, and
                won&apos;t waste your time with scope creep and ghosting.
              </p>
              <p className="font-medium text-neutral-800">
                {PLATFORM_NAME} exists to solve that problem. We build the demand.
                You close the deal.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#ebebeb] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 md:px-8">
          <FadeIn>
            <h2 className="text-center text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">
              What you get
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-neutral-200 bg-[#F2F2F2] p-6 sm:p-10">
                  <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">
                    {b.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    {b.copy}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">
              We don&apos;t list everyone.
              <br />
              That&apos;s the point.
            </h2>
            <p className="mt-6 text-left text-base leading-relaxed text-neutral-600 sm:mt-8 sm:text-lg">
              To be listed on {PLATFORM_NAME}, creators go through a review
              process: portfolio review, a brief intro call with our team, and
              verification of past client work. We&apos;re not looking for
              perfection — we&apos;re looking for people who deliver what they
              promise.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mx-auto mt-12 max-w-2xl">
              <WaitlistForm
                defaultType="creator"
                source="for-creators-vetting"
                buttonLabel="Start Your Application"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <WaitlistCTA />
      <div className="bg-[#F2F2F2] py-10 text-center sm:py-12">
        <Link
          href="/"
          className="text-base font-medium text-neutral-600 hover:text-neutral-900"
        >
          ← Back home
        </Link>
      </div>
    </>
  );
}
