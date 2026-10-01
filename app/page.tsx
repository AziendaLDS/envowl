import { Suspense } from "react";
import { Audiences } from "@/components/home/Audiences";
import { Faq } from "@/components/home/Faq";
import { HomeHero } from "@/components/home/HomeHero";
import { JoinCTA } from "@/components/home/JoinCTA";
import { Manifesto } from "@/components/home/Manifesto";
import { Process } from "@/components/home/Process";
import { ResourcesEditorial } from "@/components/home/ResourcesEditorial";
import { StackMarquee } from "@/components/home/StackMarquee";
import { Vetting } from "@/components/home/Vetting";
import { faqSchema } from "@/lib/schema";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  pageMetadata,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

const homeFaq = [
  {
    question: "What is Envowl?",
    answer:
      "Envowl is a curated AI talent marketplace. Businesses find vetted experts to implement AI the right way. Professionals get trusted guidance to stay ahead as their roles evolve. Creators and agencies get qualified leads from buyers who already understand the value of what they do.",
  },
  {
    question: "Who is Envowl for?",
    answer:
      "Businesses that are adopting AI and need people who've actually done it before. Professionals whose roles are changing faster than their training is, and who want real guidance, not just courses. And creators or agencies who are tired of competing on price against people with no track record.",
  },
  {
    question: "How is Envowl different from a freelancer directory?",
    answer:
      "A directory will show you everyone. Envowl shows you who's actually good. Every creator is reviewed before they're listed: portfolio, delivery history, scope fit. We'll turn down a lot of applications, because a shorter list means better matches. Buyers waste less time. Creators get better clients. That doesn't happen in an open marketplace.",
  },
  {
    question: "How does the vetting process work?",
    answer:
      "Every creator application will be manually reviewed against three criteria: portfolio quality, delivery credibility, and scope fit. We won't approve everyone, and that keeps the list worth trusting.",
  },
    {
    question: "When does Envowl launch?",
    answer:
      "We're targeting Summer 2027. Join the waitlist for early access and founder pricing when we open, plus weekly AI insights until then.",
  },
  {
    question: "Is Envowl free to use as a business?",
    answer:
      "Pricing is still being finalized, but the plan is for browsing and posting to be free, and you only pay when you engage a creator. Our resources are free today: practical AI guidance you can use whether you hire anyone or not.",
  },
  {
    question: "Can I use Envowl if I don't know exactly what I need?",
    answer:
      "That's actually the best time to start. Vague briefs become sharp projects when the right people are involved. Post what you've got and the conversations that follow will result in the best work.",
  },
];

const homeFaqSchema = faqSchema(homeFaq);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <HomeHero />
      <StackMarquee />
      <Manifesto />
      <Process />
      <Vetting />
      <Audiences />
      <ResourcesEditorial />
      <Faq items={homeFaq} />
      <Suspense fallback={<div id="waitlist" className="min-h-[36rem]" />}>
        <JoinCTA />
      </Suspense>
    </>
  );
}
