export type Article = {
  slug: string;
  tag: string;
  title: string;
  teaser: string;
  readTime: string;
  date: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "how-ai-can-save-your-trade-business-10-hours-a-week",
    tag: "Small Business",
    title: "How AI can save your trade business 10 hours a week",
    teaser:
      "Practical automations for scheduling, quotes, and follow-ups that actually stick.",
    readTime: "5 min read",
    date: "Mar 18, 2026",
    body: [
      "If you run a trade or field service business, your week is a stack of small decisions: who to call back, what to quote, which job to prioritize. AI will not replace your craft — but it can remove hours of admin if you pick a few high-leverage workflows.",
      "Start with one bottleneck. For many teams it is scheduling or missed follow-ups. A lightweight assistant — even rules-based at first — can draft replies, summarize voicemail, and keep your CRM from going stale.",
      "Measure before you scale. Track time saved for two weeks on a single workflow. When the number is real, expand to the next pain point instead of chasing every shiny tool.",
    ],
  },
  {
    slug: "the-ai-skills-every-professional-needs-by-2026",
    tag: "Career",
    title: "The AI skills every professional needs by 2026",
    teaser:
      "Not model names — judgment, prompting, and how to validate outputs fast.",
    readTime: "4 min read",
    date: "Mar 22, 2026",
    body: [
      "The useful skill is not memorizing every model release. It is knowing how to frame a task, critique a draft, and spot hallucinations before they reach a client.",
      "Learn to write briefs: context, audience, constraints, and what success looks like. That transfers across tools and vendors.",
      "Build a personal quality bar: when to accept a first pass, when to iterate, and when to throw the output away. That judgment is what employers and clients pay for.",
    ],
  },
  {
    slug: "what-to-look-for-when-hiring-an-ai-freelancer",
    tag: "Hiring AI Help",
    title: "What to look for (and watch out for) when hiring an AI freelancer",
    teaser:
      "Signals of real delivery versus buzzwords — and questions to ask in the first call.",
    readTime: "6 min read",
    date: "Apr 2, 2026",
    body: [
      "Ask for outcomes, not adjectives. You want before/after examples, metrics they influenced, and how they handled scope changes.",
      "Red flags: vague promises, no references, or a portfolio that is only slide decks. Good practitioners can point to shipped work or measurable experiments.",
      "Agree on milestones and review points. AI projects go wrong when feedback loops are fuzzy — structure protects both sides.",
    ],
  },
  {
    slug: "ai-for-operations-without-a-big-it-team",
    tag: "Industry Guides",
    title: "AI for operations without a big IT team",
    teaser:
      "Where to start when you do not have dedicated engineering support.",
    readTime: "7 min read",
    date: "Feb 10, 2026",
    body: [
      "Pick tools with clear ownership: who will maintain the workflow after launch? If the answer is nobody, choose a simpler path.",
      "Favor integrations your team already uses. The best automation is the one people actually run.",
      "Document decisions. A one-page playbook beats a clever pipeline that only one person understands.",
    ],
  },
  {
    slug: "prompting-for-marketing-teams-a-short-primer",
    tag: "Tools & Tutorials",
    title: "Prompting for marketing teams: a short primer",
    teaser:
      "Templates for campaigns, variants, and tone control your brand can reuse.",
    readTime: "5 min read",
    date: "Jan 28, 2026",
    body: [
      "Give the model a role, audience, and non-goals. Marketing copy fails when constraints are implied instead of stated.",
      "Generate in batches, then edit for voice. Treat outputs as drafts, not finals.",
      "Keep a living library of prompts that worked — and notes on what to avoid next time.",
    ],
  },
  {
    slug: "news-trends-that-matter-for-small-business-this-quarter",
    tag: "News & Trends",
    title: "News and trends that matter for small business this quarter",
    teaser:
      "A calm read on what is hype versus what is ready to pilot.",
    readTime: "4 min read",
    date: "Apr 8, 2026",
    body: [
      "Regulation and platform policy will move faster than most roadmaps. Watch how vendors handle data retention and opt-out — not just feature lists.",
      "Open models versus hosted APIs is a cost and compliance decision, not a religion. Match architecture to your risk profile.",
      "The durable trend is judgment under uncertainty. Tools change; that skill does not.",
    ],
  },
];

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
  "Career & Upskilling": "Career",
};

export function articleMatchesFilter(article: Article, filter: string): boolean {
  if (filter === "All" || filter === "") return true;
  const target = filterToTag[filter] ?? filter;
  return article.tag === target;
}
