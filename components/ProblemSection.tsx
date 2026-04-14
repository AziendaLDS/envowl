import { FadeIn } from "@/components/FadeIn";
import { PLATFORM_NAME } from "@/lib/constants";

export function ProblemSection() {
  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:gap-14 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-20 lg:items-start">
        <FadeIn>
          <p className="text-balance text-3xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-4xl md:text-5xl md:leading-tight lg:text-[2.75rem] xl:text-[3.1rem]">
            &ldquo;Everyone&apos;s talking about AI. Nobody knows where to
            start.&rdquo;
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="space-y-5 text-base leading-relaxed text-neutral-600 sm:space-y-6 sm:text-lg">
            <p>
              The tools exist. The talent exists. But most businesses — and most
              people — don&apos;t know how to find the right help, or who to
              trust.
            </p>
            <p>
              LinkedIn is full of &quot;AI experts&quot; with no track record.
              Generic freelancer platforms don&apos;t vet for this. And the
              learning curve to even know what questions to ask is steep.
            </p>
            <p className="font-medium text-neutral-800">
              {PLATFORM_NAME} exists to bridge that gap.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
