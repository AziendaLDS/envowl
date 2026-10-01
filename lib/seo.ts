import type { Metadata } from "next";

export const SITE_URL = "https://envowl.com";
export const SITE_NAME = "Envowl";
export const SITE_TWITTER_HANDLE = "@envowl";
export const COMPANY_LEGAL_NAME = "LDS Ventures LLC";
export const DEFAULT_TITLE = "Envowl — The AI Talent Marketplace";
export const DEFAULT_DESCRIPTION =
  "A curated marketplace for vetted AI talent. Join the waitlist for early access and founder pricing. Launching Summer 2027.";

const ogImage = {
  url: "/og-image.png" as const,
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

/**
 * Per-route metadata with canonical URL, Open Graph, and Twitter cards.
 * Paths are absolute on envowl.com (via root `metadataBase`).
 */
export function pageMetadata(opts: PageMetadataOptions): Metadata {
  const pathname = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: opts.ogType ?? "website",
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE_TWITTER_HANDLE,
      creator: SITE_TWITTER_HANDLE,
      title: opts.title,
      description: opts.description,
      images: [ogImage.url],
    },
  };
}
