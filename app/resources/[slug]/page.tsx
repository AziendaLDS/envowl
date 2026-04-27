import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBlocks } from "@/components/ArticleBody";
import { articles, getArticleBySlug } from "@/lib/articles";
import { PLATFORM_NAME } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: "Article not found" };
  }
  const parsedDate = new Date(article.date);
  const publishedTime = Number.isNaN(parsedDate.getTime())
    ? undefined
    : parsedDate.toISOString();

  const base = pageMetadata({
    title: article.title,
    description: article.teaser,
    path: `/resources/${params.slug}`,
    ogType: "article",
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime,
      authors: [SITE_NAME],
      tags: [article.tag, "AI", "AI adoption"],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const parsedDate = new Date(article.date);
  const publishedTime = Number.isNaN(parsedDate.getTime())
    ? undefined
    : parsedDate.toISOString();
  const articleUrl = `${SITE_URL}/resources/${params.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.teaser,
    datePublished: publishedTime,
    dateModified: publishedTime,
    articleSection: article.tag,
    inLanguage: "en-US",
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
  const breadcrumb = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: article.title, path: `/resources/${params.slug}` },
  ]);

  return (
    <article className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumb]) }}
      />
      <div className="mx-auto max-w-3xl px-6 sm:px-6 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {article.tag}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:mt-5 sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-3 text-base text-neutral-500">
          <span>{article.readTime}</span>
          <span aria-hidden>·</span>
          <span>{article.date}</span>
        </div>
        {article.curatedLine ? (
          <p className="mt-3 text-sm text-neutral-500">{article.curatedLine}</p>
        ) : null}
        <div className="mt-12">
          <ArticleBlocks blocks={article.blocks} />
        </div>
        <div className="mt-16 border-t border-neutral-200 pt-12">
          <p className="text-base text-neutral-600">
            Want early access to {PLATFORM_NAME}?{" "}
            <Link href="/#waitlist" className="font-semibold text-accent hover:underline">
              Join the waitlist
            </Link>
            .
          </p>
          <Link
            href="/resources"
            className="mt-8 inline-flex text-base font-medium text-neutral-700 hover:text-neutral-900"
          >
            ← All resources
          </Link>
        </div>
      </div>
    </article>
  );
}
