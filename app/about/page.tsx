import Link from "next/link";
import { PLATFORM_NAME, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Envowl — Trust in AI Talent",
  description:
    "Why Envowl exists: trusted introductions between people who need AI help and creators who deliver. Our beliefs, mission, and how we're building the marketplace.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32 md:px-8 md:pb-16 md:pt-40 lg:pt-44">
        <p className="mb-4 text-sm uppercase tracking-widest text-neutral-500 sm:mb-6">
          What we believe
        </p>
        <h1 className="mb-6 text-3xl font-semibold leading-tight sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.25rem]">
          AI isn&apos;t the great equalizer.
          <br />
          <span className="text-neutral-400 md:whitespace-nowrap">
            Access to trusted AI expertise&nbsp;is.
          </span>
        </h1>
      </section>

      {/* Manifesto body */}
      <section className="mx-auto max-w-4xl space-y-8 px-6 pb-16 text-neutral-600 sm:space-y-10 sm:px-6 sm:pb-24 md:px-8">
        <p className="text-lg leading-loose lg:text-xl">
          Something strange is happening. The most transformative technology in
          a generation is available to everyone — and most people still
          can&apos;t figure out how to use it to their advantage.
        </p>

        <p className="text-lg leading-loose lg:text-xl">
          It&apos;s not a capability problem. The tools work. The use cases are
          real. Businesses are saving hours every week. Careers are being
          rebuilt around new skills. The gap between those who understand AI and
          those who don&apos;t is widening faster than most people realize.
        </p>

        <p className="text-lg leading-loose lg:text-xl">The problem is trust.</p>

        <div className="my-10 border-l-2 border-accent py-2 pl-6 sm:my-12 sm:pl-8">
          <p className="text-xl font-medium leading-loose text-neutral-900 lg:text-2xl">
            &ldquo;One bad experience with an AI &apos;expert&apos; doesn&apos;t
            just cost money. It costs belief. And belief, once lost, is hard to
            rebuild.&rdquo;
          </p>
        </div>

        <p className="text-lg leading-loose lg:text-xl">
          The internet is full of people selling AI solutions. Promises of
          automation, efficiency, transformation. Most of it is noise. And the
          people who get burned — the small business owner who paid someone to
          build something that never worked, the professional who followed
          advice that led nowhere — they don&apos;t come back. They write off
          the whole category.
        </p>

        <p className="text-lg leading-loose lg:text-xl">
          That&apos;s not an AI problem. That&apos;s a vetting problem. A trust
          problem. A marketplace problem.
        </p>

        <p className="text-lg leading-loose lg:text-xl">
          {PLATFORM_NAME} exists because we believe the single biggest unlock
          for AI adoption isn&apos;t a better tool. It&apos;s a better
          introduction. A trusted handshake between the people who need help
          and the people who can actually deliver it.
        </p>

        <div className="my-10 space-y-5 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:my-12 sm:space-y-6 sm:p-10">
          <p className="text-lg font-medium leading-loose text-white lg:text-xl">
            We believe:
          </p>
          {[
            "That knowledge is the only real defense against being left behind.",
            "That the best AI implementations come from people who understand your business, not just the technology.",
            "That trust is built through track records, not promises.",
            "That the gap between AI haves and have-nots is a solvable problem.",
            "That the next decade will be defined by who got educated early and who didn't.",
          ].map((belief) => (
            <div key={belief} className="flex gap-4">
              <span className="mt-1 flex-shrink-0 text-accent">—</span>
              <p className="text-lg leading-loose text-neutral-300 lg:text-xl">
                {belief}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg leading-loose lg:text-xl">
          We&apos;re not neutral on this. We think the stakes are real. We think
          the window for getting ahead of the curve is open right now — and it
          won&apos;t stay open forever.
        </p>

        <p className="text-lg leading-loose lg:text-xl">
          {PLATFORM_NAME} is built for the people who feel that urgency. The
          business owner who knows they need to adapt but doesn&apos;t know who
          to trust. The professional who wants to make themselves indispensable
          in a world that&apos;s changing under their feet. The creator who knows
          how to deliver results but is tired of chasing clients who don&apos;t
          understand the value of what they do.
        </p>

        <p className="text-lg leading-loose lg:text-xl">
          We built the resource library because education shouldn&apos;t be
          paywalled. We built the vetting process because quality shouldn&apos;t
          be a gamble. We built the marketplace because the right introduction
          changes everything.
        </p>

        <p className="text-lg font-medium leading-loose text-neutral-900 lg:text-xl">
          This is what {PLATFORM_NAME} is for. This is what we&apos;re building
          toward.
        </p>
      </section>

      {/* Divider + CTA */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-6 sm:py-24 md:px-8">
          <div className="mb-12 grid grid-cols-1 gap-8 sm:mb-16 md:grid-cols-3 md:gap-8">
            {[
              {
                label: "For the curious",
                desc: "Start with the resource library. Free, practical, no fluff. Get smart before you spend a dollar.",
                link: "/resources",
                cta: "Browse resources →",
              },
              {
                label: "For the ready",
                desc: "Join the waitlist. Get early access, founder pricing, and weekly AI insights straight to your inbox.",
                link: "/#waitlist",
                cta: "Join the waitlist →",
              },
              {
                label: "For the builders",
                desc: "If you're an AI creator who delivers real results, we want you on the platform.",
                link: "/for-creators",
                cta: "Apply as a creator →",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="inline-block text-sm text-neutral-900 underline underline-offset-4 transition-colors hover:text-accent"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="border-t border-neutral-200 pt-8 sm:pt-10">
            <p className="text-sm text-neutral-600">
              {PLATFORM_NAME} is operated by LDS Ventures LLC. Questions?{" "}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="text-neutral-500 underline underline-offset-4 transition-colors hover:text-neutral-900"
              >
                Get in touch.
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
