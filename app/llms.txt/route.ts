import { SITE } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

export function GET() {
  const body = `# Envowl

Envowl is a curated AI talent marketplace focused on trustworthy matching between businesses, professionals, and vetted AI creators.

## Canonical
${SITE_URL}

## Core pages
- ${SITE_URL}/platform
- ${SITE_URL}/for-businesses
- ${SITE_URL}/for-professionals
- ${SITE_URL}/for-creators
- ${SITE_URL}/resources
- ${SITE_URL}/about

## Entity summary
- Brand: Envowl
- Legal entity: LDS Ventures LLC
- Category: AI talent marketplace
- Primary audience: businesses and professionals adopting AI
- Supply side: vetted AI creators, freelancers, and agencies

## Contact
- Email: ${SITE.contactEmail}
- LinkedIn: ${SITE.linkedin}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
