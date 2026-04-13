"use client";

import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  SUBSCRIBE_BUTTON_CLASS,
  SUBSCRIBE_INPUT_CLASS,
} from "@/lib/subscribe-classes";

/**
 * Client-only: audience type toggle updates hidden `type` field.
 * Submits to `/api/subscribe` (Beehiiv V2) via JSON.
 */
export function AudienceSubscribeForm({
  type,
  source,
  buttonLabel,
}: {
  type: "client" | "creator";
  source: string;
  buttonLabel: string;
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
    const t = fd.get("type") === "creator" ? "creator" : "client";
    const src = String(fd.get("source") ?? source);

    setPending(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          type: t,
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

      router.push("/waitlist-confirmed?subscribed=1");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="w-full max-w-lg">
      <form
        key={type}
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
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
        <input type="hidden" name="type" value={type} />
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
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
