"use client";

import { VolcanoBackground } from "@/components/VolcanoBackground";

const DEFAULT_NEXT_SECTION_BG = "#F2F2F2";

type ShootingStarsHeroBackgroundProps = {
  fadeVariant?: "default" | "lower";
  nextSectionBg?: string;
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.trim().replace("#", "");
  const normalized =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => `${c}${c}`)
          .join("")
      : clean;
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return { r: 242, g: 242, b: 242 };
  }
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

export function ShootingStarsHeroBackground({
  fadeVariant = "default",
  nextSectionBg = DEFAULT_NEXT_SECTION_BG,
}: ShootingStarsHeroBackgroundProps) {
  const rgb = hexToRgb(nextSectionBg);
  const fadeHeightClass =
    fadeVariant === "lower"
      ? "h-[min(36vh,20rem)] sm:h-[min(34vh,22rem)] md:h-[min(32vh,24rem)]"
      : "h-[min(52vh,28rem)] sm:h-[min(48vh,30rem)] md:h-[min(42vh,32rem)]";
  const fadeGradient =
    fadeVariant === "lower"
      ? `linear-gradient(to top,
            ${nextSectionBg} 0%,
            ${nextSectionBg} 22%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.96) 34%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.78) 50%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5) 66%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.22) 80%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.06) 92%,
            transparent 100%
          )`
      : `linear-gradient(to top,
            ${nextSectionBg} 0%,
            ${nextSectionBg} 14%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.94) 26%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.72) 42%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.42) 58%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18) 74%,
            rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05) 88%,
            transparent 100%
          )`;

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
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-[5] ${fadeHeightClass}`}
        style={{
          background: fadeGradient,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[2px]"
        style={{ backgroundColor: nextSectionBg }}
        aria-hidden
      />
    </>
  );
}
