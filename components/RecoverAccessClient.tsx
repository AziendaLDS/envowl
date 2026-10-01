"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  BUTTON_PRIMARY_CLASS,
  SUBSCRIBE_INPUT_CLASS,
} from "@/lib/subscribe-classes";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RecoverAccessClient() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    const normalizedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/recover-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      const data = (await res.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!res.ok || !data.success) {
        setError(
          data.message ??
            "No purchase found for that email. If you think this is an error please contact us."
        );
        return;
      }

      setMessage("Check your inbox. We sent your access links.");
    } catch {
      setError("Could not recover access right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative isolate -mt-16 overflow-hidden md:-mt-[4.5rem]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[36rem] w-[36rem] rounded-full bg-ember/15 blur-[140px]"
      />
      <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4 pb-24 pt-32 sm:px-6">
        <FadeIn>
          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-paper sm:text-6xl">
            Recover access.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-paper/65">
            Enter the email you used at checkout and we&apos;ll resend your
            prompt pack links.
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <form onSubmit={submit} className="mt-10" noValidate>
            <label htmlFor="recover-email" className="mb-2 block text-sm font-medium text-paper/75">
              Email
            </label>
            <input
              id="recover-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={SUBSCRIBE_INPUT_CLASS}
              placeholder="you@example.com"
            />
            <button type="submit" disabled={loading} className={`mt-4 w-full ${BUTTON_PRIMARY_CLASS}`}>
              {loading ? "Sending..." : "Send me my access"}
            </button>

            {message ? (
              <p className="mt-4 rounded-2xl border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-paper" role="status">
                {message}
              </p>
            ) : null}
            {error ? (
              <p className="mt-4 text-sm text-red-300" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
