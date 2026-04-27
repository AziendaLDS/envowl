import {
  COMPANY_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import { SITE } from "@/lib/constants";

type Thing = Record<string, unknown>;

export function organizationSchema(): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: COMPANY_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      SITE.linkedin,
      SITE.twitter,
      SITE.instagram,
      SITE.tiktok,
      SITE.youtube,
      SITE.facebook,
      SITE.reddit,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.contactEmail,
      },
    ],
  };
}

export function websiteSchema(): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "ReadAction",
      target: `${SITE_URL}/resources`,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>,
): Thing {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
