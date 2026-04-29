"use client";

import { BriefcaseBusiness, Sparkles, UserRoundCheck } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const audienceCards = [
  {
    title: "For Businesses",
    subtitle: "Proven AI implementation support.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "For Professionals",
    subtitle: "Trusted role-specific guidance.",
    Icon: UserRoundCheck,
  },
  {
    title: "For Creators",
    subtitle: "Qualified leads over price wars.",
    Icon: Sparkles,
  },
] as const;

export function PlatformAudienceCards() {
  return (
    <ul className="mt-6 grid gap-4 lg:grid-cols-3">
      {audienceCards.map((card) => (
        <li key={card.title}>
          <ServiceCard
            title={card.title}
            subtitle={card.subtitle}
            Icon={card.Icon}
            className="h-auto min-h-[360px]"
          />
        </li>
      ))}
    </ul>
  );
}
