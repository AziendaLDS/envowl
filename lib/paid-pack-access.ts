import { SITE_URL } from "@/lib/seo";

export type PaidPackSlug = "claude-for-life" | "claude-for-business";

export const PAID_PACK_CONFIG: Record<
  PaidPackSlug,
  { title: string; path: string; accessToken: string; blurb: string }
> = {
  "claude-for-life": {
    title: "Claude for Life",
    path: "/prompts/claude-for-life",
    accessToken: "env-life-2024",
    blurb:
      "Your 8 life prompts are ready. Use the link any time — save it somewhere safe.",
  },
  "claude-for-business": {
    title: "Claude for Business",
    path: "/prompts/claude-for-business",
    accessToken: "env-business-2024",
    blurb:
      "Your 15 business prompts are ready. Use the link any time — save it somewhere safe.",
  },
};

export function isPaidPackSlug(value: string): value is PaidPackSlug {
  return value === "claude-for-life" || value === "claude-for-business";
}

export function absolutePaidPackAccessUrl(slug: PaidPackSlug): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = PAID_PACK_CONFIG[slug];
  return `${base}${p.path}?access_token=${encodeURIComponent(p.accessToken)}`;
}
