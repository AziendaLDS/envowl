/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resources/how-ai-can-save-your-trade-business-10-hours-a-week",
        destination: "/resources/ai-save-trade-business-10-hours",
        permanent: true,
      },
      {
        source: "/resources/the-ai-skills-every-professional-needs-by-2026",
        destination: "/resources/ai-skills-every-professional-needs",
        permanent: true,
      },
      {
        source: "/resources/what-to-look-for-when-hiring-an-ai-freelancer",
        destination: "/resources/hiring-ai-freelancer-what-to-look-for",
        permanent: true,
      },
      {
        source: "/resources/ai-for-operations-without-a-big-it-team",
        destination: "/resources/ai-for-operations-without-it-team",
        permanent: true,
      },
      {
        source: "/resources/prompting-for-marketing-teams-a-short-primer",
        destination: "/resources/prompting-for-marketing-teams",
        permanent: true,
      },
      {
        source: "/resources/news-trends-that-matter-for-small-business-this-quarter",
        destination: "/resources/ai-trends-small-business-q2-2026",
        permanent: true,
      },
    ];
  },
  images: {
    // Files in /public are served at the site root (e.g. /logo.png) and work with `next/image`
    // without `remotePatterns`; only external URLs need host allowlists.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
