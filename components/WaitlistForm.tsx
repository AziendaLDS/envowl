"use client";

import type { FormEvent, ReactNode } from "react";
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
  /** `onDark` = light text on dark sections. `hero` = black copy on dark hero (light text-shadow for legibility, no box). */
  microcopyTone = "default",
  /** Tighter gap between the email row and microcopy (e.g. homepage hero). */
  microcopySpacing = "default",
}: {
  defaultType?: "client" | "creator";
  source?: string;
  buttonLabel?: string;
  microcopy?: ReactNode;
  className?: string;
  microcopyTone?: "default" | "onDark" | "hero";
  microcopySpacing?: "default" | "tight";
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
    const type = fd.get("type") === "creator" ? "creator" : "client";
    const src = String(fd.get("source") ?? source);

    setPending(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailValue,
          role: type,
          source: src,
        }),
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!result.success) {
        setError(result.message ?? "Something went wrong. Try again.");
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={pending || success}
        />
        <input type="hidden" name="type" value={defaultType} />
        <input type="hidden" name="source" value={source} />
        <button type="submit" className={SUBSCRIBE_BUTTON_CLASS} disabled={pending || success}>
          {pending ? "Joining..." : success ? "You're in ✓" : buttonLabel}
        </button>
      </form>
      {error ? (
        <p
          className={`mt-3 text-center text-sm ${
            microcopyTone === "onDark" || microcopyTone === "hero"
              ? "text-red-300"
              : "text-red-600"
          }`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
      {microcopy ? (
        <p
          className={`text-center text-sm font-medium leading-snug sm:text-base ${
            microcopySpacing === "tight" ? "mt-2.5" : "mt-4"
          } ${
            microcopyTone === "hero"
              ? "text-black [text-shadow:0_0_1px_rgba(255,255,255,1),0_0_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,255,255,0.45)]"
              : microcopyTone === "onDark"
                ? "text-white/75"
                : "text-neutral-600"
          }`}
        >
          {microcopy}
        </p>
      ) : null}
    </div>
  );
}
