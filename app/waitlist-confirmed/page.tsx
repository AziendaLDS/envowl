import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
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
  `I just joined the waitlist for ${PLATFORM_NAME} — vetted AI experts for real projects.`,
);

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function WaitlistConfirmedPage({ searchParams }: PageProps) {
  const raw = searchParams.subscribed;
  const subscribed =
    raw === "1" || raw === "true" || (Array.isArray(raw) && raw[0] === "1");

  return (
    <section className="min-h-[70vh] border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-6 md:px-8">
        {subscribed ? (
          <FadeIn>
            <div className="mx-auto mb-10 inline-flex items-center gap-4 rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-emerald-900 shadow-sm">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white"
                aria-hidden
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-left text-base font-semibold sm:text-lg">
                Success — you&apos;re subscribed
              </span>
            </div>
          </FadeIn>
        ) : null}

        <FadeIn delay={subscribed ? 0.06 : 0}>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl">
            You&apos;re on the list.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-8 sm:text-lg md:text-xl">
            {subscribed ? (
              <>
                Your email is saved with our newsletter (Beehiiv). Check your
                inbox for a confirmation message — then we&apos;ll share early
                access, founder pricing, and weekly insights before launch.
              </>
            ) : (
              <>
                We&apos;ll be in touch before launch with early access details
                and founder pricing. In the meantime — start here.
              </>
            )}
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          {[
            {
              title: "Read the resources",
              body: "Practical guides — no fluff.",
              href: "/resources",
              label: "Browse resources →",
              external: false,
            },
            {
              title: "Follow us on LinkedIn",
              body: "Updates for businesses and creators.",
              href: SITE.linkedin,
              label: "Open LinkedIn →",
              external: true,
            },
            {
              title: "Share with someone",
              body: "Help them find trusted AI help.",
              href: `https://twitter.com/intent/tweet?text=${shareText}`,
              label: "Post on X →",
              external: true,
            },
          ].map((card, i) => (
            <FadeIn key={card.title} delay={subscribed ? 0.1 + i * 0.06 : i * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-lg font-semibold text-neutral-900">
                  {card.title}
                </h2>
                <p className="mt-3 flex-1 text-base text-neutral-600">
                  {card.body}
                </p>
                <a
                  href={card.href}
                  {...(card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-5 flex w-full min-h-[44px] items-center justify-center rounded-xl bg-neutral-100 px-4 py-3 text-base font-semibold text-accent transition hover:bg-neutral-200/80 sm:inline-flex sm:w-auto sm:bg-transparent sm:px-0 sm:py-0 sm:hover:bg-transparent"
                >
                  {card.label}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <Link
            href="/"
            className="mt-16 inline-block text-base font-medium text-neutral-600 hover:text-neutral-900"
          >
            ← Back home
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
