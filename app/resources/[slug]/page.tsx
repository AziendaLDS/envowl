import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
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
    ogImage: `/og/${params.slug}.png`,
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
    <article className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumb]) }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[21rem] -top-[21rem] -z-10 h-[54rem] w-[54rem] ember-glow opacity-15"
      />
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 md:px-8 md:pb-32 md:pt-36">
        <Link
          href="/resources"
          className="group -my-3 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-paper/55 transition hover:text-paper"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} aria-hidden />
          All resources
        </Link>
        <p className="mt-10 text-sm font-semibold text-ember">{article.tag}</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-paper sm:text-5xl md:text-6xl">
          {article.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-base text-paper/50">
          <span>{article.readTime}</span>
          <span>{article.date}</span>
        </div>
        {article.curatedLine ? (
          <p className="mt-3 text-sm text-paper/50">{article.curatedLine}</p>
        ) : null}
        <div className="mt-12 border-t border-paper/10 pt-12">
          <ArticleBlocks blocks={article.blocks} />
        </div>
        <div className="mt-16 rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-9">
          <p className="font-display text-2xl font-semibold tracking-tight text-paper">
            Want early access to {PLATFORM_NAME}?
          </p>
          <p className="mt-2 text-base text-paper/60">
            Vetted AI talent, founder pricing, and weekly insights before launch.
          </p>
          <Link
            href="/#waitlist"
            className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ember px-6 text-base font-semibold text-ink transition hover:bg-ember-soft"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </article>
  );
}
