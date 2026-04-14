import { FadeIn } from "@/components/FadeIn";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us your problem",
      body: "Fill out a short brief - your industry, what you want to automate or build, and your rough budget. No technical knowledge required.",
    },
    {
      number: "02",
      title: "Get matched with vetted creators",
      body: "We surface 2-3 profiles that have solved exactly this before. Real portfolios, real reviews, real results - no guessing who is legit.",
    },
    {
      number: "03",
      title: "Hire with confidence",
      body: "Start your project, message directly, and move fast. Every creator on Envowl has been reviewed by our team before they are listed.",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            The process
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            From problem to solution in three steps.
          </h2>
        </FadeIn>

        <div className="relative mt-12 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.06}>
              <div className="relative flex h-full flex-col gap-4 pr-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold leading-none text-accent">
                    {step.number}
                  </span>
                  <div className="z-10 h-6 w-6 shrink-0 rounded-full border-2 border-accent bg-white" />
                  <div className="hidden h-px flex-1 bg-neutral-200 md:block" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCaseCategories() {
  const categories = [
    {
      label: "Workflow automation",
      desc: "Eliminate repetitive admin and manual processes",
    },
    {
      label: "AI content systems",
      desc: "Scale blogs, social, and email without a bigger team",
    },
    {
      label: "Chatbots and assistants",
      desc: "Customer support, internal Q&A, and lead qualification",
    },
    {
      label: "Data and reporting",
      desc: "Turn raw data into dashboards and weekly summaries",
    },
    {
      label: "Marketing automation",
      desc: "Campaigns, sequences, and targeting on autopilot",
    },
    {
      label: "CRM and lead systems",
      desc: "Qualify, track, and follow up without manual work",
    },
  ];

  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            What businesses hire for
          </p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
            If your problem fits in one of these, we have someone for it.
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeIn key={cat.label} delay={i * 0.05}>
              <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm">
                <h3 className="mb-2 text-base font-semibold text-neutral-900 transition-colors group-hover:text-accent">
                  {cat.label}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">{cat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProofStats() {
  const stats = [
    { value: "500+", label: "Waitlist members" },
    { value: "100%", label: "Manually vetted creators" },
    { value: "$0", label: "To browse and compare" },
  ];

  return (
    <div className="mt-10 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-10">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-semibold text-neutral-900">{stat.value}</p>
          <p className="mt-1 text-xs leading-snug text-neutral-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
