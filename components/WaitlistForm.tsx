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
  buttonLabel = "Join the waitlist",
  microcopy,
  className = "",
  /** Left-align microcopy/errors instead of centering. */
  align = "center",
}: {
  defaultType?: "client" | "creator" | "professional";
  source?: string;
  buttonLabel?: string;
  microcopy?: ReactNode;
  className?: string;
  align?: "center" | "left";
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
    const rawType = fd.get("type");
    const type = rawType === "creator" || rawType === "professional" ? rawType : "client";
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
          className={`mt-3 text-sm text-red-300 ${align === "left" ? "text-left" : "text-center"}`}
          role="alert"
        >
          {error}
        </p>
      ) : null}
      {microcopy ? (
        <p
          className={`mt-4 text-sm leading-snug text-paper/55 ${align === "left" ? "text-left" : "text-center"}`}
        >
          {microcopy}
        </p>
      ) : null}
    </div>
  );
}
