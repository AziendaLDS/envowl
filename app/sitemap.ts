import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/for-businesses",
  "/for-creators",
  "/for-professionals",
  "/privacy",
  "/resources",
  "/terms",
  "/platform",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/resources" ? 0.9 : 0.8,
  }));

  const articlesPages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/resources/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...articlesPages];
}
