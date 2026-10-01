import { FadeIn } from "@/components/FadeIn";
import { ProfessionalBriefingCard } from "@/components/ForProfessionalSections";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For Professionals",
  description:
    "Stay ahead of AI in your career. Envowl helps professionals in marketing, operations, finance, HR, and more build practical AI skills without becoming developers.",
  path: "/for-professionals",
});

const fears = [
  {
    role: "Marketing Manager",
    fear: "My team can do in 2 hours what used to take 2 weeks. I don't know how to manage that yet.",
  },
  {
    role: "Operations Lead",
    fear: "Leadership keeps asking if we can automate this. I need to have an answer, not just say maybe.",
  },
  {
    role: "Finance Analyst",
    fear: "Half the reports I build could be automated. I need to be the one who automates them.",
  },
  {
    role: "Procurement Specialist",
    fear: "Vendors are pitching AI tools I don't understand. I need to evaluate them with confidence.",
  },
];

const offerings = [
  {
    title: "Role-specific AI guides",
    body: "Practical breakdowns for marketing, finance, operations, HR, procurement, and sales in plain language.",
    tag: "Resource library",
    live: true,
  },
  {
    title: "1-on-1 sessions with AI specialists",
    body: "Book time with a vetted AI creator who understands your function. Walk away with a plan, not a sales pitch.",
    tag: "Available at launch",
    live: false,
  },
  {
    title: "Weekly AI briefings by industry",
    body: "A short, practical update on what changed in AI this week and what it means for your job.",
    tag: "Newsletter",
    live: true,
  },
  {
    title: "Learning paths by role",
    body: "A structured sequence from AI basics to practical workflow automation, tailored to where you work.",
    tag: "Coming soon",
    live: false,
  },
];

const offeringBg = [
  "bg-gradient-to-br from-ember/25 via-ink-900 to-ink-900",
  "bg-ink-900",
  "dot-field bg-ink-900",
  "bg-gradient-to-br from-ink-700 to-ink-900",
];

const roles = [
  "Marketing and content",
  "Operations and project management",
  "Finance and data",
  "HR and talent",
  "Sales and account management",
  "Procurement and supply chain",
  "Legal and compliance",
  "Executives and team leads",
];

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        aside={<ProfessionalBriefingCard />}
        eyebrow="For professionals"
        title={
          <>
            AI is changing your job. <span className="text-ember">Get ahead of it.</span>
          </>
        }
        description="You don't need to become an engineer. You need to know enough to lead, not follow, and make yourself impossible to replace."
      >
        <WaitlistForm
          align="left"
          defaultType="professional"
          source="for-professionals-hero"
          microcopy={WAITLIST_MICROCOPY_SHORT}
        />
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Sound familiar?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/60">
            The professionals who feel this first are the ones who move first.
          </p>
          <p className="mt-3 text-sm text-paper/45">
            Illustrative examples, not quotes from real people.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-3 md:auto-rows-fr md:grid-cols-2">
          {fears.map((item, i) => (
            <FadeIn key={item.role} delay={i * 0.06} className="h-full">
              <figure className="h-full rounded-[20px] border border-paper/[0.08] bg-ink-900 p-7 sm:p-9">
                <span aria-hidden className="block font-display text-6xl font-bold leading-none text-ember">
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-display text-xl font-medium leading-snug tracking-tight text-paper sm:text-2xl">
                  {item.fear}
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-paper/50">{item.role}</figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            From uncertain to confident.
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-3 md:auto-rows-fr md:grid-cols-2">
          {offerings.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06} className="h-full">
              <div
                className={`flex h-full min-h-[15rem] flex-col justify-between gap-10 rounded-[20px] border border-paper/[0.08] p-7 sm:p-9 ${offeringBg[i]}`}
              >
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    item.live ? "bg-ember text-ink" : "border border-paper/20 text-paper/60"
                  }`}
                >
                  {item.tag}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-paper/60">{item.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              You don&apos;t need to be in tech to benefit from AI.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/60">
              Every function is being reshaped by AI. The people who understand
              it, even at a strategic level, will lead the teams that don&apos;t.
              Envowl is built for the skilled, experienced people in the middle
              who are ready to level up.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <ul className="flex flex-wrap gap-2.5">
              {roles.map((role) => (
                <li
                  key={role}
                  className="rounded-full border border-paper/15 px-5 py-3 font-display text-lg font-medium text-paper/85 transition hover:border-ember hover:bg-ember hover:text-ink"
                >
                  {role}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CtaBand
        title="Be first when we launch."
        description="Early access, role-specific AI guides, and weekly insights before we open to the public."
      >
        <WaitlistForm
          defaultType="professional"
          microcopy={WAITLIST_MICROCOPY_SHORT}
          source="for-professionals-cta"
        />
      </CtaBand>
    </>
  );
}
