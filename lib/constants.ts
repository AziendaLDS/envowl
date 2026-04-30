export const PLATFORM_NAME =
  process.env.NEXT_PUBLIC_PLATFORM_NAME ?? "Envowl";

/** Shown near hero / signup — no fabricated member counts. */
export const WAITLIST_MICROCOPY_SHORT =
  "Free to join. Launching Summer 2026." as const;

/** Purple waitlist sections + DarkVeil tint (home + for-professionals). */
export const WAITLIST_BRAND_PURPLE = "#302B63" as const;

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
