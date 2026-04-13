import { TermsOfService } from "@/components/legal/TermsOfService";
import { PLATFORM_NAME } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${PLATFORM_NAME} (Envowl), operated by LDS Ventures LLC.`,
};

export default function TermsPage() {
  return <TermsOfService />;
}
