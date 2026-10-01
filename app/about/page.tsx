import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RoadmapCard } from "@/components/AboutSections";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/site/PageHero";
import { PLATFORM_NAME, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Envowl: Trust in AI Talent",
  description:
    "Why Envowl exists: trusted introductions between people who need AI help and creators who deliver. Our beliefs, mission, and how we're building the marketplace.",
  path: "/about",
});

const beliefs = [
  "Hiring for AI shouldn't feel like a gamble.",
  "The best people to hire are the ones who've already done it and can prove it.",
  "You shouldn't need to understand AI to benefit from it.",
  "Learning about AI should be free. Finding someone you can trust should be easy.",
  "A shorter list of better people beats an endless directory.",
];

const paths = [
  {
    label: "For the curious",
    desc: "Start with the resource library. Free, practical, no fluff. Get smart before you spend a dollar.",
    link: "/resources",
    cta: "Browse resources",
  },
  {
    label: "For the ready",
    desc: "Join the waitlist. Get early access, founder pricing, and weekly AI insights straight to your inbox.",
    link: "/#waitlist",
    cta: "Join the waitlist",
  },
  {
    label: "For the builders",
    desc: "If you're an AI creator who delivers real results, we want you on the platform.",
    link: "/for-creators",
    cta: "Apply as a creator",
  },
];

const body = "text-lg leading-[1.8] text-paper/70 sm:text-xl";

function BeliefsCard() {
  return (
    <FadeIn>
      <div className="rounded-[24px] bg-ember p-7 text-ink sm:p-10">
        <p className="font-display text-3xl font-bold tracking-tight">We believe:</p>
        <ol className="mt-8 space-y-6">
          {beliefs.map((belief, i) => (
            <li key={belief} className="grid grid-cols-[2rem_1fr] gap-3 sm:grid-cols-[2.5rem_1fr]">
              <span className="font-display text-xl font-bold text-ink/45">{i + 1}</span>
              <p className="text-lg font-medium leading-relaxed">{belief}</p>
            </li>
          ))}
        </ol>
      </div>
    </FadeIn>
  );
}


export default function AboutPage() {
  return (
    <>
      <PageHero
        aside={<RoadmapCard />}
        titleClassName="text-[2.6rem] sm:text-6xl lg:text-[3.25rem] xl:text-[3.75rem]"
        eyebrow="What we believe"
        title={
          <>
            AI isn&apos;t the great equalizer.{" "}
            <span className="text-paper/35">Access to trusted AI expertise is.</span>
          </>
        }
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:px-8 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <article className="max-w-2xl space-y-8">
          <p className={body}>
            Something strange is happening. The most transformative technology in
            a generation is available to everyone, and most people still
            can&apos;t figure out how to use it to their advantage.
          </p>
          <p className={body}>
            It&apos;s not a capability problem. The tools work. The use cases are
            real. Businesses are saving hours every week. Careers are being
            rebuilt around new skills. The gap between those who understand AI and
            those who don&apos;t is widening faster than most people realize.
          </p>
          <p className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            The problem is trust.
          </p>

          <FadeIn>
            <blockquote className="my-12 border-l-4 border-ember py-2 pl-6 font-display text-2xl font-semibold leading-snug tracking-tight text-paper sm:pl-8 sm:text-3xl">
              &ldquo;One bad experience with an AI &lsquo;expert&rsquo; doesn&apos;t
              just cost money. It costs belief. And belief, once lost, is hard to
              rebuild.&rdquo;
            </blockquote>
          </FadeIn>

          <p className={body}>
            The internet is full of people selling AI solutions. Promises of
            automation, efficiency, transformation. Most of it is noise. And the
            people who get burned, like the small business owner who paid someone
            to build something that never worked, or the professional who followed
            advice that led nowhere, don&apos;t come back. They write off the
            whole category.
          </p>
          <p className={body}>
            The technology isn&apos;t what&apos;s failing. The introductions are: no vetting, no track record, no trust.
          </p>
          <p className={body}>
            {PLATFORM_NAME} exists because we believe the single biggest unlock for
            AI adoption isn&apos;t a better tool. It&apos;s a better introduction.
            A trusted handshake between the people who need help and the people
            who can actually deliver it.
          </p>

          <div className="lg:hidden">
            <BeliefsCard />
          </div>

          <p className={body}>
            We&apos;re not neutral on this. We think the stakes are real. We think
            the window for getting ahead of the curve is open right now, and it
            won&apos;t stay open forever.
          </p>
          <p className={body}>
            {PLATFORM_NAME} is built for the people who feel that urgency. The
            business owner who knows they need to adapt but doesn&apos;t know who
            to trust. The professional who wants to make themselves indispensable
            in a world that&apos;s changing under their feet. The creator who knows
            how to deliver results but is tired of chasing clients who don&apos;t
            understand the value of what they do.
          </p>
          <p className={body}>
            We built the resource library because education shouldn&apos;t be
          paywalled. We&apos;re building the vetting process because quality
          shouldn&apos;t be a gamble, and the marketplace because the right
          introduction changes everything.
          </p>
          <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-paper sm:text-3xl">
            This is what {PLATFORM_NAME} is for.
          <br />
          <span className="text-ember">This is what we&apos;re building toward.</span>
          </p>
        </article>
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <BeliefsCard />
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-paper/[0.08]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-8 md:py-28">
          <div className="grid gap-3 md:grid-cols-3">
            {paths.map((item) => (
              <Link
                key={item.label}
                href={item.link}
                className="group flex min-h-[15rem] flex-col justify-between rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 transition hover:border-ember/50"
              >
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight text-paper">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-paper/60">{item.desc}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ember">
                  {item.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-sm text-paper/50">
            {PLATFORM_NAME} is operated by LDS Ventures LLC. Questions?{" "}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
