import { redirect } from "next/navigation";
import { PromptPackContent, type PromptItem } from "@/components/PromptPackContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Claude for Business Prompts",
  description: "Claude for Business prompts for Envowl customers.",
  path: "/prompts/claude-for-business",
});

metadata.robots = {
  index: false,
  follow: false,
};

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const ACCESS_TOKEN = "env-business-2024";

const businessPrompts: PromptItem[] = [
  "The Full SEO Audit",
  "The Cold Outreach Writer",
  "The Sales Page Writer",
  "The Content Machine",
  "The Client Proposal Builder",
  "The Business Audit",
  "The Competitor Breakdown",
  "The Market Research Engine",
  "The Brand Voice Builder",
  "The Newsletter Engine",
  "The Pricing Strategy Advisor",
  "The SOP Builder",
  "The Meeting Summarizer",
  "The Automation Brief",
  "The Job Post Writer",
].map((title) => ({
  title,
  prompt: `You are my senior business strategist and execution partner.

Task: ${title}

Business context:
- [Business type]
- [Offer/product]
- [Audience]
- [Current challenge]
- [Target outcome]

Execution instructions:
1) Give me a practical, high-leverage output I can use today.
2) Prioritize speed, clarity, and measurable impact.
3) Include a simple implementation checklist.
4) Add one "common mistakes to avoid" section.

Output format:
- Recommended strategy
- Ready-to-use draft/template
- Implementation checklist
- Mistakes to avoid`,
}));

export default function ClaudeForBusinessPromptsPage({
  searchParams,
}: PageProps) {
  const rawToken = searchParams.access_token;
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken;

  if (token !== ACCESS_TOKEN) {
    redirect("/shop");
  }

  return (
    <PromptPackContent
      eyebrow="Prompts"
      title="Claude for Business"
      description="Your business prompt library is below. Copy any prompt and paste it directly into Claude or ChatGPT."
      prompts={businessPrompts}
    />
  );
}
