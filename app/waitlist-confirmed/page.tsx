import { ArrowUpRight, Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Eyes from "@/components/Eyes";
import { PLATFORM_NAME, SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "You're on the Waitlist",
  description:
    "Thank you for joining Envowl. Check your inbox for confirmation and early access updates.",
  path: "/waitlist-confirmed",
});

metadata.robots = {
  index: false,
  follow: false,
};

const shareText = encodeURIComponent(
  `I just joined the waitlist for ${PLATFORM_NAME}: vetted AI experts for real projects.`,
);

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function WaitlistConfirmedPage({ searchParams }: PageProps) {
  const raw = searchParams.subscribed;
  const subscribed =
    raw === "1" || raw === "true" || (Array.isArray(raw) && raw[0] === "1");

  const cards = [
    {
      title: "Read the resources",
      body: "Practical guides. No fluff.",
      href: "/resources",
      label: "Browse resources",
      external: false,
    },
    {
      title: "Follow us on LinkedIn",
      body: "Updates for businesses and creators.",
      href: SITE.linkedin,
      label: "Open LinkedIn",
      external: true,
    },
    {
      title: "Share with someone",
      body: "Help them find trusted AI help.",
      href: `https://twitter.com/intent/tweet?text=${shareText}`,
      label: "Post on X",
      external: true,
    },
  ];

  return (
    <section className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-24rem] left-1/2 -z-10 h-[44rem] w-[70rem] -translate-x-1/2 rounded-full bg-ember/20 blur-[160px]"
      />
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-32 text-center sm:px-6 md:px-8 md:pb-32 md:pt-44">
        <FadeIn>
          <Eyes inline size={44} className="justify-center" />
        </FadeIn>
        {subscribed ? (
          <FadeIn delay={0.04}>
            <p className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-paper">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ember text-ink" aria-hidden>
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              You&apos;re subscribed
            </p>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.08}>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-paper sm:text-7xl">
            You&apos;re on the list.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paper/65 sm:text-xl">
            {subscribed
              ? "Check your inbox for a confirmation message. We'll share early access, founder pricing, and weekly insights before launch."
              : "We'll be in touch before launch with early access details and founder pricing. In the meantime, start here."}
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.12 + i * 0.06} className="h-full">
              <a
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full min-h-[12rem] flex-col justify-between rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 transition hover:border-ember/50"
              >
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-paper">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-base text-paper/60">{card.body}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
                  {card.label}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
