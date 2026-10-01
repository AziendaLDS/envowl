import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { FreePackEmailModal } from "@/components/FreePackEmailModal";
import { PackIncludedList } from "@/components/PackIncludedList";
import { PageHero } from "@/components/site/PageHero";
import { SamplePromptCard } from "@/components/ShopSections";
import { ShopBuyNowButton } from "@/components/ShopBuyNowButton";
import { pageMetadata } from "@/lib/seo";
import {
  BUTTON_PRIMARY_CLASS,
  BUTTON_SECONDARY_CLASS,
} from "@/lib/subscribe-classes";

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
      "Four prompts that teach you how to talk to AI so the answers are actually useful. Made for anyone who wants to get more out of Claude or ChatGPT, no experience needed.",
    included: [
      "Explain It Like I Know Nothing About It",
      "The Study Guide",
      "The Thought Organizer",
      "The Honest Feedback Machine",
    ],
    price: "Free",
    cta: "Get the free pack",
    href: "#",
    freePackEmailCapture: true,
  },
  {
    name: "Claude for Life",
    description:
      "Eight prompts for thinking clearer, writing better, and getting things done. Each one is a complete, reusable system for the planning, writing, and decision-making that normally takes hours.",
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
    cta: "Buy now",
    href: "#",
    freePackEmailCapture: false,
    checkoutPack: "claude-for-life" as const,
  },
  {
    name: "Claude for Business",
    description:
      "Fifteen prompts for small business owners, freelancers, and solopreneurs. Each one replaces a task you dread, pay someone for, or never get around to.",
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
    cta: "Buy now",
    href: "#",
    freePackEmailCapture: false,
    checkoutPack: "claude-for-business" as const,
  },
];

const cardStyles = [
  "border border-paper/[0.08] bg-ink-900",
  "border border-paper/[0.08] bg-gradient-to-b from-ink-700 to-ink-900",
  "border border-ember/60 bg-gradient-to-b from-ember/20 via-ink-900 to-ink-900",
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        aside={<SamplePromptCard />}
        eyebrow="Shop"
        title={
          <>
            Prompt packs that <span className="text-ember">actually work.</span>
          </>
        }
        description="Built by people who use Claude every day. Copy, paste, and get useful output fast."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:px-8 md:pb-32">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <FadeIn key={pack.name} delay={i * 0.06} className="h-full">
              <div className={`flex h-full flex-col rounded-[20px] p-7 sm:p-8 ${cardStyles[i]}`}>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                    {pack.name}
                  </h2>
                  <span
                    className={`shrink-0 rounded-full px-3.5 py-1 font-display text-lg font-bold ${
                      pack.price === "Free" ? "border border-paper/20 text-paper" : "bg-ember text-ink"
                    }`}
                  >
                    {pack.price}
                  </span>
                </div>

                <p className="mt-5 text-base leading-relaxed text-paper/60">{pack.description}</p>

                <p className="mt-7 text-sm font-semibold text-paper">
                  {pack.included.length} prompts included
                </p>
                <PackIncludedList items={pack.included} />

                <div className="mt-auto pt-9">
                  {pack.freePackEmailCapture ? (
                    <FreePackEmailModal
                      buttonLabel={pack.cta}
                      buttonClassName={`w-full ${BUTTON_SECONDARY_CLASS}`}
                    />
                  ) : "checkoutPack" in pack && pack.checkoutPack ? (
                    <ShopBuyNowButton
                      packName={pack.checkoutPack}
                      packTitle={pack.name}
                      buttonLabel={pack.cta}
                      buttonClassName={`w-full ${BUTTON_PRIMARY_CLASS}`}
                    />
                  ) : (
                    <Link href={pack.href} className={`w-full ${BUTTON_PRIMARY_CLASS}`}>
                      {pack.cta}
                    </Link>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
                </div>

        <p className="mt-8 text-center text-sm text-paper/55">
          Instant access by email. All sales are final. Already bought a pack?{" "}
          <Link
            href="/recover"
            className="font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
          >
            Recover your access link.
          </Link>
        </p>
      </section>
    </>
  );
}
