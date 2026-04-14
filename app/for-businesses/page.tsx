import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PLATFORM_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hire Vetted AI Experts for Your Business",
  description:
    "Connect with verified AI experts who understand your industry and budget. Envowl helps businesses avoid costly mismatches — join the waitlist.",
  path: "/for-businesses",
});

const pills = [
  "Small business owners",
  "Operations & marketing teams",
  "Professionals upskilling",
];

export default function ForBusinessesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-[#0a0a0a] py-16 text-white sm:py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
          <FadeIn>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              AI for your business, without the guesswork.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
              Find a vetted AI expert who understands your industry, your
              budget, and your actual problem — not just the tech.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mx-auto mt-12 max-w-2xl">
              <WaitlistForm
                defaultType="client"
                source="for-businesses-hero"
                microcopyTone="onDark"
                buttonLabel="Join the Waitlist"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-6 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">
              You don&apos;t need to understand AI. You need results.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:mt-8 sm:text-lg">
              Whether you&apos;re a small business owner trying to automate the
              admin, a marketing manager looking to scale content, or a
              professional who wants to future-proof their career —{" "}
              {PLATFORM_NAME} connects you with someone who&apos;s done this
              before.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {pills.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-700 ring-1 ring-neutral-200"
                >
                  {p}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#ebebeb] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 sm:px-6 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">
              One bad AI experience can set you back months.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600 sm:mt-8 sm:space-y-5 sm:text-lg">
              <p>
                We&apos;ve seen it happen: a business hires someone who
                overpromises, delivers something broken, and the owner walks
                away convinced AI &quot;doesn&apos;t work.&quot; That&apos;s not
                an AI problem. That&apos;s a vetting problem.
              </p>
              <p>
                Every creator on {PLATFORM_NAME} is reviewed by our team before
                they&apos;re listed. You see real portfolios, real reviews, real
                results.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
          <FadeIn>
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl md:text-5xl">
              Not ready to hire yet? Start here.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:mt-8 sm:text-lg">
              Browse our free library of guides, videos, and industry-specific
              breakdowns. Get smart on AI before you spend a dollar.
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <Link
              href="/resources"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-accent-hover sm:mt-12 sm:inline-flex sm:w-auto"
            >
              Browse Free Resources →
            </Link>
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
