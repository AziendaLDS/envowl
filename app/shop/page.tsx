import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { FadeIn } from "@/components/FadeIn";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop",
  description:
    "Browse Envowl packs designed to help you learn and implement AI faster.",
  path: "/shop",
});

const packs = [
  {
    name: "Claude Starter Pack",
    description:
      "Your introduction to using AI the right way - not just asking random questions and hoping for the best, but giving it the right instructions to get outputs that are actually useful. These 4 prompts are built for anyone who wants to get more out of Claude or ChatGPT starting today, no experience required.",
    included: [
      "Explain It Like I Know Nothing About It",
      "The Study Guide",
      "The Thought Organizer",
      "The Honest Feedback Machine",
    ],
    price: "Free",
    cta: "Get Free Pack",
    href: "#",
  },
  {
    name: "Claude for Life",
    description:
      "A collection of 8 deeply engineered prompts built for anyone who wants to think clearer, communicate better, and actually get things done. These aren't generic AI prompts - each one is a complete system designed to replace the kind of thinking, writing, and planning that normally takes hours and drains your energy.",
    included: [
      "The Instant Brief",
      "The Perfect Professional Email",
      "The Complete Weekly Planner",
      "The Creative Brainstorm Engine",
      "From Messy to Polished",
      "The Decision Clarity Engine",
      "The Bio That Actually Sounds Like You",
      "The Job Application Machine",
    ],
    price: "$15",
    cta: "Buy Now",
    href: "#",
  },
  {
    name: "Claude for Business",
    description:
      "15 high-powered prompts built for small business owners, freelancers, and solopreneurs who are done wasting time on tasks that should take minutes but somehow eat up hours. Each prompt is designed to replace something you either dread doing, pay someone else to do, or never get around to at all.",
    included: [
      "The Full SEO Audit",
      "The Cold Outreach Writer",
      "The Sales Page Writer",
      "The Content Machine",
      "The Client Proposal Builder",
      "The Business Audit",
      "The Competitor Breakdown",
      "The Market Research Engine",
      "The Brand Voice Builder",
      "The Newsletter Engine",
      "The Pricing Strategy Advisor",
      "The SOP Builder",
      "The Meeting Summarizer",
      "The Automation Brief",
      "The Job Post Writer",
    ],
    price: "$27",
    cta: "Buy Now",
    href: "#",
  },
];

export default function ShopPage() {
  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-accent">
            Shop
          </p>
          <h1 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Choose your pack
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg">
            Pick the pack that matches your current stage. Replace placeholder
            content with your final pack names, descriptions, and included items.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <FadeIn key={pack.name} delay={i * 0.06}>
              <BorderGlow
                className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-7 sm:p-8"
                backgroundColor="#ffffff"
                borderRadius={24}
                glowColor="16 90 56"
                glowRadius={24}
                edgeSensitivity={30}
                coneSpread={24}
                fillOpacity={0.25}
                colors={["#f54927", "#f97316", "#fb7185"]}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                    {pack.name}
                  </h2>
                  <span className="shrink-0 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-semibold text-neutral-800">
                    {pack.price}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {pack.description}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-neutral-700 sm:text-base">
                  {pack.included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={pack.href}
                  className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  {pack.cta}
                </Link>
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
