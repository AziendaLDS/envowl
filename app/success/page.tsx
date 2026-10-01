import { Check } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { BUTTON_PRIMARY_CLASS } from "@/lib/subscribe-classes";
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
    <section className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-24rem] left-1/2 -z-10 h-[44rem] w-[70rem] -translate-x-1/2 rounded-full bg-ember/20 blur-[160px]"
      />
      <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-4 pb-24 pt-32 text-center sm:px-6 md:px-8">
        <FadeIn>
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember text-ink" aria-hidden>
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </span>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-paper sm:text-6xl">
            Payment successful.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-paper/65">
            {pack ? "Your prompts are ready. We also emailed you the access link." : "Thanks for your purchase. Check your inbox for your access link."}
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            {accessHref ? (
              <Link href={accessHref} className={BUTTON_PRIMARY_CLASS}>
                Open your prompts
              </Link>
            ) : null}
            <Link
              href="/recover"
              className="text-sm font-medium text-paper/60 underline decoration-paper/30 underline-offset-4 hover:text-paper"
            >
              Lost access? Recover it here
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
