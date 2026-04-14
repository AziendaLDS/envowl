import { FadeIn } from "@/components/FadeIn";
import { PLATFORM_NAME } from "@/lib/constants";

const steps = [
  {
    label: "01 — Browse",
    title: "Find the right expert",
    copy: `Every creator on ${PLATFORM_NAME} is vetted by our team. Browse by use case, industry, tool, or budget.`,
  },
  {
    label: "02 — Connect",
    title: "Describe your project",
    copy:
      "Our project brief builder helps you articulate exactly what you need — even if you're not sure yet. No jargon required.",
  },
  {
    label: "03 — Execute",
    title: "Get it done, safely",
    copy:
      "Transparent pricing, milestone-based delivery, and real reviews from real clients. We stay involved so nothing falls through the cracks.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Simple by design.
          </h2>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-neutral-200/80 bg-white/60 p-6 shadow-sm sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {s.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-neutral-900 sm:mt-5 sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-neutral-600">
                  {s.copy}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
