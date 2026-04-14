import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Envowl collects, uses, and protects your information. Privacy policy for Envowl, operated by LDS Ventures LLC.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
