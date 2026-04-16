"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  SUBSCRIBE_BUTTON_CLASS,
  SUBSCRIBE_INPUT_CLASS,
} from "@/lib/subscribe-classes";
import { submitToWaitlist } from "@/lib/waitlist";

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
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (success) return;
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const emailValue = String(fd.get("email") ?? "").trim();
    const t = fd.get("type") === "creator" ? "creator" : "client";
    const src = String(fd.get("source") ?? source);

    setPending(true);
    try {
      const result = await submitToWaitlist({
        email: emailValue,
        role: t,
        source: src,
      });

      if (!result.success) {
        setError(result.message);
        return;
      }
      setEmail("");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="w-full min-w-0 max-w-lg">
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={pending || success}
        />
        <input type="hidden" name="type" value={type} />
        <input type="hidden" name="source" value={source} />
        <button type="submit" className={SUBSCRIBE_BUTTON_CLASS} disabled={pending || success}>
          {pending ? "Joining..." : success ? "You're in ✓" : buttonLabel}
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
