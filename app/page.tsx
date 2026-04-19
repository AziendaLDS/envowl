import { AudienceSplit } from "@/components/AudienceSplit";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { ResourcesPreview } from "@/components/ResourcesPreview";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";
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
          source="homepage"
          microcopyTone="onDark"
          microcopy={<>{WAITLIST_MICROCOPY_SHORT}</>}
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
