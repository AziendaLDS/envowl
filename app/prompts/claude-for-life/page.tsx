import { redirect } from "next/navigation";
import { PromptPackContent, type PromptItem } from "@/components/PromptPackContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Claude for Life Prompts",
  description: "Claude for Life prompts for Envowl customers.",
  path: "/prompts/claude-for-life",
});

metadata.robots = {
  index: false,
  follow: false,
};

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const ACCESS_TOKEN = "env-life-2024";

const lifePrompts: PromptItem[] = [
  "The Instant Brief",
  "The Perfect Professional Email",
  "The Complete Weekly Planner",
  "The Creative Brainstorm Engine",
  "From Messy to Polished",
  "The Decision Clarity Engine",
  "The Bio That Actually Sounds Like You",
  "The Job Application Machine",
].map((title) => ({
  title,
  prompt: `You are my elite operations and communication assistant.

Task: ${title}

Inputs:
- [Paste notes, rough draft, or context]
- [Desired audience]
- [Tone: clear, direct, human]
- [Deadline or urgency]

Requirements:
1) Organize the information logically.
2) Improve clarity and remove fluff.
3) Keep the output practical and ready to use.
4) Highlight risks, assumptions, and missing details.

Return format:
- Final output
- Why this works
- Optional alternatives`,
}));

export default function ClaudeForLifePromptsPage({ searchParams }: PageProps) {
  const rawToken = searchParams.access_token;
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken;

  if (token !== ACCESS_TOKEN) {
    redirect("/shop");
  }

  return (
    <PromptPackContent
      eyebrow="Prompts"
      title="Claude for Life"
      description="Your Claude for Life prompts are ready below. Use Copy to grab each full prompt instantly."
      prompts={lifePrompts}
    />
  );
}
