import Link from "next/link";
import { Suspense } from "react";
import { AudienceWaitlist } from "@/components/AudienceWaitlist";
import { FadeIn } from "@/components/FadeIn";
import { PLATFORM_NAME } from "@/lib/constants";

export function AudienceSplit() {
  return (
    <section className="border-b border-neutral-200 bg-[#ebebeb] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Who is {PLATFORM_NAME} for?
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-10">
          <FadeIn delay={0.05}>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-[#F2F2F2] p-6 sm:p-10 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                I want to use AI
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-neutral-900 sm:mt-5 sm:text-3xl">
                Stop leaving efficiency on the table.
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-neutral-600">
                Whether you run a plumbing company or work in marketing, AI can
                save you hours every week. Find vetted experts who speak your
                language — not just tech jargon.
              </p>
              <Link
                href="/?audience=client#audience-waitlist"
                scroll
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-neutral-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-neutral-800 sm:mt-10 sm:inline-flex sm:w-fit"
              >
                Join as a Client →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-[#F2F2F2] p-6 sm:p-10 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                I build with AI
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-neutral-900 sm:mt-5 sm:text-3xl">
                Stop chasing bad leads.
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-neutral-600">
                Your biggest problem isn&apos;t building — it&apos;s finding the
                right clients who understand the value of what you do. We bring
                them to you.
              </p>
              <Link
                href="/?audience=creator#audience-waitlist"
                scroll
                className="mt-8 flex w-full items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white transition hover:bg-accent-hover sm:mt-10 sm:inline-flex sm:w-fit"
              >
                Apply as a Creator →
              </Link>
            </div>
          </FadeIn>
        </div>
        <Suspense
          fallback={
            <div className="mx-auto mt-16 h-44 max-w-xl animate-pulse rounded-2xl bg-neutral-200/60" />
          }
        >
          <AudienceWaitlist />
        </Suspense>
      </div>
    </section>
  );
}
