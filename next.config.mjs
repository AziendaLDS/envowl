/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Files in /public are served at the site root (e.g. /logo.png) and work with `next/image`
    // without `remotePatterns`; only external URLs need host allowlists.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
