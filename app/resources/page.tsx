import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ResourcesGrid } from "@/components/ResourcesGrid";
import { ResourcesNewsletter } from "@/components/ResourcesNewsletter";

export const metadata = {
  title: "Resources",
  description:
    "Practical guides for businesses, professionals, and anyone keeping up with AI.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-8">
          <FadeIn>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              The AI resource library.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg md:text-xl">
              Practical guides for businesses, professionals, and anyone trying to
              keep up with where the world is going.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#ebebeb] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <Suspense
            fallback={
              <div className="h-64 animate-pulse rounded-xl bg-neutral-200/70" />
            }
          >
            <ResourcesGrid />
          </Suspense>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 md:px-8">
          <ResourcesNewsletter />
        </div>
      </section>
    </>
  );
}
