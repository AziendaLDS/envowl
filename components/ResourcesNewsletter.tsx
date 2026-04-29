import BorderGlow from "@/components/BorderGlow";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";

export function ResourcesNewsletter() {
  return (
    <BorderGlow
      className="min-w-0 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10"
      backgroundColor="#ffffff"
      borderRadius={24}
      glowColor="16 90 56"
      glowRadius={24}
      edgeSensitivity={30}
      coneSpread={24}
      fillOpacity={0.28}
      colors={["#f54927", "#f97316", "#fb7185"]}
    >
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
          microcopy={WAITLIST_MICROCOPY_SHORT}
        />
      </div>
    </BorderGlow>
  );
}
