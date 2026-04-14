import { AudienceSplit } from "@/components/AudienceSplit";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  pageMetadata,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero>
        <WaitlistForm
          defaultType="client"
          source="hero"
          microcopyTone="onDark"
          microcopy={
            <>
              Free to join. No spam. Launching Summer 2026.
            </>
          }
        />
      </Hero>
      <ProblemSection />
      <HowItWorks />
      <AudienceSplit />
      <ResourcesPreview />
      <WaitlistCTA />
    </>
  );
}
