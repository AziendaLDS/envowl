"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/SpotlightCard";

export interface ServiceCardProps {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, subtitle, Icon, className }: ServiceCardProps) {
  return (
    <SpotlightCard
      className={cn(
        "relative flex min-h-[340px] w-full flex-col justify-between rounded-[2.25rem] border border-white/15",
        "bg-[#161430]/85 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-8",
        "transition-colors duration-300 hover:border-white/25",
        className
      )}
      spotlightColor="rgba(118, 95, 215, 0.28)"
    >
      <div className="relative z-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-[#d9d6f5] ring-1 ring-white/10">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      <div className="relative z-10 space-y-3">
        <h3 className="text-balance text-xl font-semibold leading-tight tracking-tight text-[#e7e6f6] sm:text-2xl">
          {title}
        </h3>
        <p className="max-w-[28ch] text-base leading-relaxed text-[#b8b5d5]">{subtitle}</p>
      </div>
    </SpotlightCard>
  );
}
