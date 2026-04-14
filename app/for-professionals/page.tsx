import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ShootingStarsHeroBackground } from "@/components/ShootingStarsHeroBackground";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistForm } from "@/components/WaitlistForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For Professionals",
  description:
    "Stay ahead of AI in your career. Envowl helps professionals in marketing, operations, finance, HR, and more build practical AI skills without becoming developers.",
  path: "/for-professionals",
});

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[#0a0a0a] py-16 text-white sm:py-24 md:py-36">
      <ShootingStarsHeroBackground fadeVariant="lower" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
            For professionals
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            AI is changing your job.
            <br />
            Get ahead of it.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
            You do not need to become an engineer. You need to know enough to lead,
            not follow, and to make yourself impossible to replace.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl">
            <WaitlistForm
              defaultType="client"
              source="for-professionals-hero"
              microcopyTone="onDark"
              buttonLabel="Join the Waitlist"
              microcopy="Already 500+ professionals signed up."
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TheFear() {
  const fears = [
    {
      role: "Marketing Manager",
      fear: "My team can do in 2 hours what used to take 2 weeks. I do not know how to manage that yet.",
    },
    {
      role: "Operations Lead",
      fear: "Leadership keeps asking if we can automate this. I need to have an answer, not just say maybe.",
    },
    {
      role: "Finance Analyst",
      fear: "Half the reports I build could be automated. I need to be the one who automates them, not the one replaced.",
    },
    {
      role: "Procurement Specialist",
      fear: "Vendors are pitching AI tools I do not understand. I need to evaluate them with confidence.",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Sound familiar?
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            The professionals who feel this first are the ones who move first.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2">
          {fears.map((item, i) => (
            <FadeIn key={item.role} delay={i * 0.06}>
              <div className="rounded-2xl border border-neutral-200 p-6 transition-all hover:border-accent/20">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.role}
                </p>
                <p className="text-base italic leading-relaxed text-neutral-600">
                  &quot;{item.fear}&quot;
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  const offerings = [
    {
      title: "Role-specific AI guides",
      body: "Not generic AI content. Practical breakdowns for marketing, finance, operations, HR, procurement, and sales in plain language.",
      tag: "Resource library",
    },
    {
      title: "1-on-1 sessions with AI specialists",
      body: "Book time with a vetted AI creator who understands your function and walk away with a plan, not a sales pitch.",
      tag: "Available at launch",
    },
    {
      title: "Weekly AI briefings by industry",
      body: "A short and practical update on what changed in AI this week and what it means for your job.",
      tag: "Newsletter",
    },
    {
      title: "Learning paths by role",
      body: "A structured sequence from AI basics to practical workflow automation, tailored to where you work.",
      tag: "Coming soon",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            What Envowl gives you
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Everything you need to go from uncertain to confident.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2">
          {offerings.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="group rounded-2xl border border-neutral-200 bg-white p-7 transition-all hover:border-accent/30 hover:shadow-sm">
                <span className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500">
                  {item.tag}
                </span>
                <h3 className="mb-2 mt-4 text-lg font-semibold text-neutral-900 transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const roles = [
    "Marketing and content teams",
    "Operations and project managers",
    "Finance and data analysts",
    "HR and talent professionals",
    "Sales and account managers",
    "Procurement and supply chain",
    "Legal and compliance",
    "Executives and team leads",
  ];

  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              Who this is for
            </p>
            <h2 className="mb-6 text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
              You do not need to be in tech to benefit from AI.
            </h2>
            <p className="text-base leading-relaxed text-neutral-600">
              Every function is being reshaped by AI. The professionals who
              understand it, even at a strategic level, will lead the teams that do
              not. Envowl is built for people in the middle: skilled, experienced,
              and ready to level up.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 gap-2">
            {roles.map((role, i) => (
              <FadeIn key={role} delay={i * 0.04}>
                <div className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-[#F2F2F2]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-neutral-900 transition-colors group-hover:text-accent">
                    {role}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b border-neutral-200 bg-[#0a0a0a] py-16 text-white sm:py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-6 md:px-8">
        <FadeIn>
          <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Be first when we launch.
          </h2>
          <p className="mb-10 mt-6 leading-relaxed text-white/80 sm:mt-8">
            Join the waitlist and get early access, role-specific AI guides, and
            weekly insights before we open to the public.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <WaitlistForm
            defaultType="client"
            source="for-professionals-cta"
            microcopyTone="onDark"
            buttonLabel="Join the Waitlist"
            microcopy="Already 500+ people signed up. Unsubscribe anytime."
          />
        </FadeIn>
      </div>
    </section>
  );
}

export default function ForProfessionalsPage() {
  return (
    <>
      <Hero />
      <TheFear />
      <WhatYouGet />
      <WhoThisIsFor />
      <FinalCTA />
      <WaitlistCTA />
      <div className="bg-[#F2F2F2] py-10 text-center sm:py-12">
        <Link
          href="/"
          className="text-base font-medium text-neutral-600 hover:text-neutral-900"
        >
          ← Back home
        </Link>
      </div>
    </>
  );
}
