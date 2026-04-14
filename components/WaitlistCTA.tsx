import { FadeIn } from "@/components/FadeIn";
import { WaitlistForm } from "@/components/WaitlistForm";

export function WaitlistCTA({ id = "waitlist" }: { id?: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-neutral-900/10 bg-[#0a0a0a] py-16 text-white sm:scroll-mt-24 sm:py-24 md:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-6 md:px-8">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Be first when we launch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg md:text-xl">
            Join the waitlist and get early access, founder pricing, and weekly
            insights on AI for your business or career.
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mx-auto mt-10 flex w-full max-w-2xl justify-center sm:mt-14">
            <WaitlistForm
              defaultType="client"
              source="bottom-cta"
              microcopyTone="onDark"
              microcopy={
                <>
                  Already 500+ people signed up. Unsubscribe anytime.
                </>
              }
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
