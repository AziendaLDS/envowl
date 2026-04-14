import articlesData from "./articles-content.json";

export type ArticleBlock =
  | { type: "p"; text: string; italic?: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "pre"; text: string; lang?: string };

export type Article = {
  slug: string;
  tag: string;
  title: string;
  teaser: string;
  readTime: string;
  date: string;
  blocks: ArticleBlock[];
};

export const articles = articlesData as Article[];

export const resourceFilters = [
  "All",
  "Small Business",
  "Career & Upskilling",
  "Industry Guides",
  "Hiring AI Help",
  "Tools & Tutorials",
  "News & Trends",
] as const;

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

const filterToTag: Record<string, string> = {
  "Career & Upskilling": "Career & Upskilling",
};

export function articleMatchesFilter(article: Article, filter: string): boolean {
  if (filter === "All" || filter === "") return true;
  const target = filterToTag[filter] ?? filter;
  return article.tag === target;
}
