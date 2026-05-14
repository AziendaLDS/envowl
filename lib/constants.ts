export const PLATFORM_NAME =
  process.env.NEXT_PUBLIC_PLATFORM_NAME ?? "Envowl";

/** Shown near hero / signup — no fabricated member counts. */
export const WAITLIST_MICROCOPY_SHORT =
  "Free to join. Launching Summer 2026." as const;

/** Deep purple brand anchor (body text, accents — not the CTA surface). */
export const WAITLIST_BRAND_PURPLE = "#201833" as const;

/** Light lavender background for bottom CTA / PrismaticBurst sections. */
export const WAITLIST_CTA_SURFACE = "#d8c4ff" as const;

/** Gradient stops for `PrismaticBurst` on light lavender CTA backgrounds. */
export const WAITLIST_BURST_COLORS = [
  "#5e2fd4",
  "#8f52ff",
  "#bf8bff",
  "#efe4ff",
  "#a066ff",
] as const;

/** Radial spotlight on `BorderGlow` cards (~`WAITLIST_BRAND_PURPLE` at ~18% opacity). */
export const CARD_SPOTLIGHT_PURPLE = "rgba(32, 24, 51, 0.18)" as const;

export const SITE = {
  contactEmail: "envowlsupport@gmail.com",
  linkedin: "https://www.linkedin.com/company/envowl/",
  twitter: "https://x.com/envowl",
  instagram: "https://www.instagram.com/envowl/",
  tiktok: "https://www.tiktok.com/@envowl",
  facebook: "https://www.facebook.com/profile.php?id=61572078663152",
  youtube: "https://www.youtube.com/@envowl",
  reddit: "https://www.reddit.com/user/envowl/",
} as const;
