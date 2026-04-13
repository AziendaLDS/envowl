import { WaitlistForm } from "@/components/WaitlistForm";

export function ResourcesNewsletter() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
      <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
        Get the weekly AI briefing.
      </h3>
      <p className="mt-3 text-base leading-relaxed text-neutral-600">
        One email, every week. What&apos;s happening in AI and what actually
        matters for your business or career.
      </p>
      <div className="mt-8">
        <WaitlistForm
          defaultType="client"
          source="resources-newsletter"
          buttonLabel="Subscribe"
        />
      </div>
    </div>
  );
}
