import { redirect } from "next/navigation";
import { PromptPackContent, type PromptItem } from "@/components/PromptPackContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Claude Starter Pack Prompts",
  description: "Starter pack prompts for Envowl customers.",
  path: "/prompts/starter",
});

metadata.robots = {
  index: false,
  follow: false,
};

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const ACCESS_TOKEN = "env-starter-free-2024";

const starterPrompts: PromptItem[] = [
  {
    title: "Explain It Like I Know Nothing About It",
    prompt: `When to use it: Any time you want to go from completely lost to genuinely understanding something — whether it's a concept from science, finance, law, technology, philosophy, history, or anything else that keeps coming up and you've never fully wrapped your head around.

You are the best teacher I've ever had — someone who can take anything, no matter how dense or technical, and make it genuinely understandable to a smart person with no background in it. Your job is not to simplify to the point of being wrong. Your job is to make it real, clear, and sticky so I actually remember and understand it.

Explain [TOPIC] to me using this structure:

THE PLAIN ENGLISH VERSION
Start from absolute zero. Assume I know nothing. What is this, really?
Strip away every technical layer and tell me what's actually going on.
If you can't explain it without jargon, explain the jargon first.
No term should appear in your explanation that you haven't already made clear.

WHY IT EXISTS AND WHY IT MATTERS
What problem does this solve, or what gap does it fill? Why did humans need this concept, system, or idea in the first place? What would the world look like without it? Make me care about this before we go deeper.

THE ANALOGY THAT MAKES IT CLICK
Give me one strong real-world analogy — something from everyday life that mirrors how this actually works. Not a textbook comparison.
Something I can picture. Then explain exactly where the analogy holds up and where it breaks down, because no analogy is perfect and pretending otherwise creates confusion later.

HOW IT ACTUALLY WORKS — STEP BY STEP
Walk me through the mechanics. If this is a process, take me through it in order. If it's a concept, build it layer by layer. If it's a system, show me the moving parts and how they connect. Go slow.
Assume I'll get lost if you skip a step.

THE VOCABULARY I NEED
List the key terms I'll encounter when reading or talking about this topic. For each one, give me a one-sentence plain English definition and, where helpful, a quick example. These should read like something a smart friend explained over coffee, not a glossary.

THE COMMON MISCONCEPTIONS
What do most people get wrong about this? What half-truths float around that sound right but aren't? What did you probably believe about this before you understood it fully? Correct those clearly and explain why the wrong version is so easy to believe.

THE BIGGER PICTURE
How does this connect to other ideas, fields, or things I might already know? Is this a piece of something larger? Does understanding this change how I should think about anything else? Give me the view from one level up.

THE PART MOST PEOPLE NEVER GET TO
What's the insight or layer of understanding that separates someone who kind of knows this topic from someone who really gets it?
What's the thing that, once you see it, you can't unsee it?
This is the part that makes the whole explanation worth it.

REAL WORLD EXAMPLES
Give me 2 or 3 concrete examples of this concept, idea, or topic showing up in the real world — in business, daily life, history, nature, or wherever it's most visible. For each one, show me specifically how the thing you just explained is present in that example.

IF I WANTED TO GO DEEPER
Point me toward the most useful next step if I want to keep learning — one concept to explore next, one type of resource worth finding, and one question worth sitting with that will push my understanding further on my own.

THE DINNER TABLE TEST
Close with a short paragraph — 4 or 5 sentences — that I could actually say out loud to a friend at dinner to explain this topic.
Conversational, confident, no jargon. If I can say this and have them understand it, you've done your job perfectly.

One rule above all: never sacrifice accuracy for simplicity.
If something is genuinely complicated, tell me it's complicated and then explain why — don't flatten it into something wrong just to make it easier. I'd rather understand the real thing slowly than misunderstand a fake version quickly.`,
  },
  {
    title: "The Study Guide",
    prompt: `When to use it: Any time you need to go from unfamiliar to genuinely prepared on any topic — for an exam, a high-stakes meeting, a certification, or any situation where not knowing your stuff has real consequences.

You are an expert teacher and academic coach who knows how to prepare someone to truly understand and retain any topic — not just memorize it long enough to pass, but actually know it.

Before you build anything, ask me:
- What is the topic or subject and what's the context — exam, interview, meeting, certification, something else?
- How much do I already know about this? Zero, a little, or a decent amount?
- How much time do I have before I need to know this?
- Do I need to understand it conceptually, apply it practically, or both?

Then build me a complete study guide that includes:

WHAT THIS IS AND WHY IT MATTERS
A plain English explanation of the topic from the ground up.
No assumed knowledge. Every key term defined the first time it appears.

THE CORE CONCEPTS I MUST KNOW
The non-negotiables. The ideas that everything else builds on.
If I only retained five things, these are them.

HOW IT ALL CONNECTS
Show me how the pieces relate to each other. What causes what.
What depends on what. A concept map in words.

THE MOST COMMONLY TESTED OR ASKED AREAS
Based on the context I gave you, what do people almost always get asked about this topic? What trips people up most often and why?

PRACTICE QUESTIONS WITH ANSWERS
Give me 8 to 10 questions that test real understanding, not just recall. Mix conceptual and applied.
Include full answers so I can check myself.

COMMON MISTAKES AND MISCONCEPTIONS
What do people consistently get wrong about this topic?
What sounds right but isn't?

THE CHEAT SHEET
A tight, one-page summary of everything I need to walk in knowing.
The version I'd review in the 20 minutes before I need it.`,
  },
  {
    title: "The Thought Organizer",
    prompt: `When to use it: Any time your thinking on something is real but scattered — in your notes, your head, a voice memo, or a half-written draft — and you need it shaped into something coherent you can actually do something with.

You are a clear thinker and skilled editor who specializes in taking messy, unfiltered thinking and finding the logical structure hiding inside it.

Before you organize anything, ask me:
- What are these thoughts about and what's the context — is this for a conversation, a document, a decision, a presentation, something I want to post, or just making sense of something for myself?
- Who is the audience — just me, or other people?
- Do I want this turned into flowing prose, clear bullet points, a structured outline, or something else?

Then take everything I give you and:

FIND THE CORE IDEA
What is this really about at its center? State it in one clear sentence — the thing all my scattered thoughts are orbiting around even if I didn't say it directly.

BUILD THE STRUCTURE
Organize my thoughts into a logical sequence that actually flows. Group what belongs together. Separate things that are trying to do different jobs. Give each section a clear heading.

FILL THE GAPS
What's missing? What point am I clearly building toward but haven't said yet? What question does this raise that I should address?

FLAG THE CONTRADICTIONS
Is there anything in my thoughts that conflicts with something else I said? Places where I seem to want two things that don't fit together?

THE CLEAN VERSION
Write the final organized version in whatever format I asked for — tight, clear, ready to use or share.

Here are my thoughts: [PASTE YOUR THOUGHTS HERE]`,
  },
  {
    title: "The Honest Feedback Machine",
    prompt: `When to use it: Any time you've created something — a piece of writing, a pitch, a plan, a design concept, an argument, a strategy — and you need someone to tell you the truth about it before it goes anywhere that matters.

You are a trusted advisor and skilled critic who gives the kind of feedback most people are too polite to give — specific, direct, genuinely useful, and delivered with the goal of making the work better, not making me feel good.

Before you say anything, ask me:
- What is the work? Paste it or describe it in full.
- What is it for and who is the intended audience?
- Where are you in the process — early draft, nearly final, or done and reconsidering?
- What kind of feedback do you most need right now — big picture, line level, structure, tone, logic, all of it?
- Is there a specific concern or nagging feeling about this work you already have? Name it.
- What would you tell me if our roles were reversed and you were critiquing this?

Then give me feedback in this structure:

WHAT IS WORKING
Be specific. Name the parts that are genuinely strong and explain exactly why they work — not to soften what comes next, but because knowing what's working is just as important as knowing what isn't.

WHAT ISN'T WORKING
This is the part most people skip or soften. Don't. Tell me what is weak, unclear, missing, off-tone, unconvincing, or broken — and for each problem, tell me specifically why it's a problem and what it costs me with the audience I described.

THE CORE ISSUE
If there is one underlying problem that explains several of the smaller ones — a structural flaw, a muddled central argument, a tone that undercuts the message — name it clearly.
Sometimes fixing one thing fixes everything.

THE GAP BETWEEN INTENT AND IMPACT
What do you think I was trying to do, and where does the work fail to actually do it? This is the most valuable feedback and the hardest to see yourself.

SPECIFIC FIXES
For the 3 most important problems you identified, tell me exactly what to do — not "improve the opening" but how, specifically, to improve it. Show me a rewritten line or restructured section if that's the clearest way to demonstrate it.

THE HONEST VERDICT
If this landed in front of the intended audience right now — what would happen? Would it achieve what I need it to achieve?
Be straight with me.

Rules you must follow:
- Don't open with a compliment to soften the blow.
Get to the work.
- Vague feedback is useless. Every note must be specific enough that I know exactly what to do with it.
- If something is genuinely good, say so and mean it.
Honesty goes both ways.
- The goal is not to tear it down. The goal is to make it as strong as it can possibly be.`,
  },
];

export default function StarterPromptsPage({ searchParams }: PageProps) {
  const rawToken = searchParams.access_token;
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken;

  if (token !== ACCESS_TOKEN) {
    redirect("/shop");
  }

  return (
    <PromptPackContent
      eyebrow="Prompts"
      title="Claude Starter Pack"
      description="Your starter prompts are below. Each one is shown in full and can be copied in one click."
      prompts={starterPrompts}
    />
  );
}
