import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import {
  PAID_PACK_CONFIG,
  isPaidPackSlug,
} from "@/lib/paid-pack-access";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Thank you",
  description:
    "Your Envowl pack purchase is confirmed. Open your prompt pack with the link below.",
  path: "/success",
});

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function SuccessPage({ searchParams }: PageProps) {
  const raw = searchParams.pack;
  const packKey =
    typeof raw === "string" ? raw : Array.isArray(raw) ? raw[0] : undefined;
  const pack =
    packKey && isPaidPackSlug(packKey) ? PAID_PACK_CONFIG[packKey] : undefined;

  const accessHref = pack
    ? `${pack.path}?access_token=${encodeURIComponent(pack.accessToken)}`
    : null;

  return (
    <section className="min-h-[70vh] border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center sm:px-6 md:px-8">
        <FadeIn>
          <div className="mx-auto inline-flex flex-col items-center gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <p className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Payment successful
            </p>
            {accessHref ? (
              <Link
                href={accessHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Open your prompts
              </Link>
            ) : null}
            <Link
              href="/recover"
              className="text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
            >
              Lost access? Recover it here
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
