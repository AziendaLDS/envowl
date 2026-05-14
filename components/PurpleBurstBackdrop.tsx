"use client";

import PrismaticBurst from "@/components/PrismaticBurst";
import { WAITLIST_BURST_COLORS } from "@/lib/constants";

export function PurpleBurstBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <PrismaticBurst
        animationType="rotate3d"
        colors={[...WAITLIST_BURST_COLORS]}
        distort={0.85}
        intensity={2.35}
        mixBlendMode="screen"
        rayCount={28}
        speed={0.45}
      />
    </div>
  );
}
