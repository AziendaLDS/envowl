import { WaitlistForm } from "@/components/WaitlistForm";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";

const headingShadow =
  "[text-shadow:0_2px_28px_rgb(32_24_51_/_0.42),0_1px_2px_rgb(32_24_51_/_0.2)]";

const bodyShadow = "[text-shadow:0_1px_14px_rgb(32_24_51_/_0.32)]";

export function ResourcesNewsletter() {
  return (
    <div className="min-w-0 text-center">
      <h3
        className={`text-xl font-semibold text-white sm:text-2xl md:text-3xl ${headingShadow}`}
      >
        Get the weekly AI briefing.
      </h3>
      <p
        className={`mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg ${bodyShadow}`}
      >
        One email, every week. What&apos;s happening in AI and what actually
        matters for your business or career.
      </p>
      <div className="mx-auto mt-10 flex justify-center">
        <WaitlistForm
          buttonLabel="Subscribe"
          defaultType="client"
          microcopy={WAITLIST_MICROCOPY_SHORT}
          microcopyTone="onDark"
          source="resources-newsletter"
        />
      </div>
    </div>
  );
}
