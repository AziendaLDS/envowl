import { PrivacyPolicy } from "@/components/legal/PrivacyPolicy";
import { PLATFORM_NAME } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${PLATFORM_NAME} (Envowl), operated by LDS Ventures LLC.`,
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
