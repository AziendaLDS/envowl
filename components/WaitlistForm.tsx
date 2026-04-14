"use client";

import type { FormEvent, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  SUBSCRIBE_BUTTON_CLASS,
  SUBSCRIBE_INPUT_CLASS,
} from "@/lib/subscribe-classes";

export function WaitlistForm({
  defaultType = "client",
  source = "landing",
  buttonLabel = "Join the Waitlist",
  microcopy,
  className = "",
  /** Use `onDark` when the form sits on a dark section (microcopy stays light). */
  microcopyTone = "default",
}: {
  defaultType?: "client" | "creator";
  source?: string;
  buttonLabel?: string;
  microcopy?: ReactNode;
  className?: string;
  microcopyTone?: "default" | "onDark";
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim();
    const type = fd.get("type") === "creator" ? "creator" : "client";
    const src = String(fd.get("source") ?? source);
    const successRedirect = String(
      fd.get("success_redirect") ?? "/waitlist-confirmed",
    );

    setPending(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type,
          source: src,
        }),
      });

      let data: { error?: string } = {};
      try {
        data = (await res.json()) as { error?: string };
      } catch {
        /* non-JSON */
      }

      if (!res.ok) {
        setError(
          typeof data.error === "string" && data.error
            ? data.error
            : "Something went wrong. Please try again.",
        );
        return;
      }

      const dest = successRedirect.startsWith("/")
        ? successRedirect
        : "/waitlist-confirmed";
      router.push(`${dest}?subscribed=1`);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className={`w-full min-w-0 ${className}`}>
      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4"
      >
        <label className="sr-only" htmlFor={`subscribe-email-${source}`}>
          Email
        </label>
        <input
          id={`subscribe-email-${source}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className={SUBSCRIBE_INPUT_CLASS}
          disabled={pending}
        />
        <input type="hidden" name="type" value={defaultType} />
        <input type="hidden" name="source" value={source} />
        <input
          type="hidden"
          name="success_redirect"
          value="/waitlist-confirmed"
        />
        <button type="submit" className={SUBSCRIBE_BUTTON_CLASS} disabled={pending}>
          {pending ? "Please wait…" : buttonLabel}
        </button>
      </form>
      {error ? (
        <p
          className={`mt-3 text-center text-sm sm:text-left ${
            microcopyTone === "onDark" ? "text-red-300" : "text-red-600"
          }`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
      {microcopy ? (
        <p
          className={`mt-4 text-center text-base sm:text-left ${
            microcopyTone === "onDark"
              ? "text-white/70"
              : "text-neutral-600"
          }`}
        >
          {microcopy}
        </p>
      ) : null}
    </div>
  );
}
