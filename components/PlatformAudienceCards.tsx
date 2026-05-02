import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { FadeIn } from "@/components/FadeIn";

const cards = [
  {
    label: 'For Businesses',
    headline: "You don't need to understand AI. You need results.",
    body: "Find a vetted expert who knows your industry, has done it before, and won't waste your time or budget.",
    linkText: 'Find an expert',
    href: '/for-businesses',
  },
  {
    label: 'For Professionals',
    headline: "AI is changing your job. Get ahead of it.",
    body: "You don't need to become an engineer — you need to know enough to lead, not follow. We'll help get you there.",
    linkText: 'Start upskilling',
    href: '/for-professionals',
  },
  {
    label: 'For Creators',
    headline: "Your next client is already looking for you.",
    body: "You handle the work. Envowl handles the demand. No cold pitching, no scope creep, no guessing who's legit.",
    linkText: 'Join as a creator',
    href: "/for-creators",
  },
];

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#e8410a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlatformAudienceCards() {
  return (
    <div className="ew-cards-wrap">
      <div className="ew-grid">
        {cards.map((card, i) => (
          <FadeIn key={card.label} delay={i * 0.06} className="h-full">
            <BorderGlow
              className="flex h-full flex-col gap-3 rounded-3xl border border-neutral-200 bg-[#F2F2F2] px-6 pb-6 pt-7"
              backgroundColor="#F2F2F2"
              borderRadius={24}
              glowColor="16 90 56"
              glowRadius={28}
              edgeSensitivity={30}
              coneSpread={24}
              fillOpacity={0.3}
              colors={["#f54927", "#f97316", "#fb7185"]}
            >
              <span className="ew-label">{card.label}</span>
              <p className="ew-headline">{card.headline}</p>
              <p className="ew-body">{card.body}</p>
              <Link href={card.href} className="ew-link">
                {card.linkText}
                <ArrowIcon />
              </Link>
            </BorderGlow>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}