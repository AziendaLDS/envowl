"use client";

import { VolcanoBackground } from "@/components/VolcanoBackground";

const NEXT_SECTION_BG = "#F2F2F2";

export function ShootingStarsHeroBackground() {
  return (
    <>
      <VolcanoBackground
        skyTop="#0f0c29"
        skyBottom="#302b63"
        lavaColor="#f54927"
        meteorCount={5}
        eruptionIntensity={1}
        starCount={50}
        enableMeteors
        enableEmbers
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(52vh,28rem)] sm:h-[min(48vh,30rem)] md:h-[min(42vh,32rem)]"
        style={{
          background: `linear-gradient(to top,
            ${NEXT_SECTION_BG} 0%,
            ${NEXT_SECTION_BG} 14%,
            rgba(242, 242, 242, 0.94) 26%,
            rgba(242, 242, 242, 0.72) 42%,
            rgba(242, 242, 242, 0.42) 58%,
            rgba(242, 242, 242, 0.18) 74%,
            rgba(242, 242, 242, 0.05) 88%,
            transparent 100%
          )`,
        }}
        aria-hidden
      />
    </>
  );
}
