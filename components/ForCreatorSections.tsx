import { FadeIn } from "@/components/FadeIn";

export function CreatorExperience() {
  const steps = [
    {
      number: "01",
      title: "Apply and get listed",
      body: "Submit your portfolio and a short intro. We review every application within 5 business days. If approved, your profile goes live immediately.",
      detail: "Portfolio review | Brief intro call | Past work verification",
    },
    {
      number: "02",
      title: "Inbound briefs land in your inbox",
      body: "Clients find you by use case - not by keyword luck. You receive a structured brief before any conversation starts. No cold pitching and no scope guessing.",
      detail: "Structured briefs | Pre-qualified budgets | No cold outreach",
    },
    {
      number: "03",
      title: "Close on your terms",
      body: "Name your rate. Set your availability. Communicate directly through the platform. We never take a cut from your first project.",
      detail: "Your rates | Direct messaging | Zero cut on first project",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            The experience
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            What it actually looks like once you are in.
          </h2>
        </FadeIn>

        <div className="mt-10 divide-y divide-neutral-200 sm:mt-14">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.06}>
              <div className="grid gap-6 py-10 md:grid-cols-[80px_1fr_1fr]">
                <span className="pt-1 font-mono text-sm font-bold text-accent">
                  {step.number}
                </span>
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{step.body}</p>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  {step.detail.split(" | ").map((d) => (
                    <span key={d} className="inline-flex items-center gap-2 text-xs text-neutral-500">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CreatorTypes() {
  const types = [
    { label: "AI automation builders", desc: "n8n, Make, Zapier, custom agents" },
    { label: "AI content creators", desc: "Scripts, video, newsletters at scale" },
    { label: "No-code and low-code devs", desc: "Bubble, Webflow, Airtable, Notion" },
    { label: "AI-native agencies", desc: "Full-service teams with AI at the core" },
    { label: "Prompt engineers", desc: "GPT, Claude, Gemini workflow design" },
    { label: "AI design specialists", desc: "Midjourney, Runway, generative brand work" },
  ];

  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            Who we list
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            If this is you, we want to hear from you.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type, i) => (
            <FadeIn key={type.label} delay={i * 0.05}>
              <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm">
                <h3 className="mb-1 text-base font-semibold text-neutral-900 transition-colors group-hover:text-accent">
                  {type.label}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">{type.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CreatorQuote() {
  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-6 md:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 h-px w-12 bg-accent" />
          <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-neutral-900">
            &quot;I have been building AI tools for two years. The hardest part was always finding clients who understood what they were buying. Envowl solves that.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-500">
              AI
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-neutral-900">AI Creator Name</p>
              <p className="text-xs text-neutral-500">AI Automation Specialist</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
