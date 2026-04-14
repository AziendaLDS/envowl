import { TermsOfService } from "@/components/legal/TermsOfService";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing your use of Envowl's website and services. Operated by LDS Ventures LLC.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsOfService />;
}
