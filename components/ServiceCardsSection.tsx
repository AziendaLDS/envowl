"use client";

import { ServiceCard } from "@/components/ServiceCard";
import { BriefcaseBusiness, Sparkles, UserRoundCheck } from "lucide-react";

const PLACEHOLDER_SERVICES = [
  {
    title: "For Businesses",
    subtitle: "Find vetted AI talent and launch faster with less risk.",
    icon: BriefcaseBusiness,
  },
  {
    title: "For Professionals",
    subtitle: "Build the skills and positioning to stay valuable in an AI-first market.",
    icon: UserRoundCheck,
  },
  {
    title: "For Creators",
    subtitle: "Get matched with serious clients who care about quality and outcomes.",
    icon: Sparkles,
  },
] as const;

export function ServiceCardsSection() {
  return (
    <section className="theme-purple-gradient border-y border-white/10 py-16 sm:py-24" aria-label="Services">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_SERVICES.map((item) => (
            <li key={item.title}>
              <ServiceCard title={item.title} subtitle={item.subtitle} Icon={item.icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
