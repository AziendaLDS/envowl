import { RecoverAccessClient } from "@/components/RecoverAccessClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Recover Access",
  description: "Recover your purchased Envowl prompt pack access links by email.",
  path: "/recover",
});

export default function RecoverAccessPage() {
  return <RecoverAccessClient />;
}
