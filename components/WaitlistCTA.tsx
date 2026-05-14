import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PurpleBurstBackdrop } from "@/components/PurpleBurstBackdrop";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  WAITLIST_CTA_SURFACE,
  WAITLIST_MICROCOPY_SHORT,
} from "@/lib/constants";

const headingShadow =
  "[text-shadow:0_2px_28px_rgb(32_24_51_/_0.42),0_1px_2px_rgb(32_24_51_/_0.2)]";

const bodyShadow = "[text-shadow:0_1px_14px_rgb(32_24_51_/_0.32)]";

const defaultDescription = (
  <>
    Join the waitlist and get early access, founder pricing, and weekly insights on
    AI for your business or career.
  </>
);

export function WaitlistCTA({
  id = "waitlist",
  source = "homepage-bottom-cta",
  description = defaultDescription,
  buttonLabel,
}: {
  id?: string;
  source?: string;
  description?: ReactNode;
  buttonLabel?: string;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden scroll-mt-20 border-b border-white/25 py-16 sm:scroll-mt-24 sm:py-24 md:py-36"
      style={{ backgroundColor: WAITLIST_CTA_SURFACE }}
    >
      <PurpleBurstBackdrop />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
        <div className="pointer-events-none">
          <FadeIn>
            <h2
              className={`text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl ${headingShadow}`}
            >
              Be first when we launch.
            </h2>
            <div
              className={`mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-xl ${bodyShadow}`}
            >
              {description}
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.08}>
          <div className="pointer-events-auto mx-auto mt-10 flex w-full max-w-2xl justify-center sm:mt-14">
            <WaitlistForm
              buttonLabel={buttonLabel}
              defaultType="client"
              microcopy={WAITLIST_MICROCOPY_SHORT}
              microcopyTone="onDark"
              source={source}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
