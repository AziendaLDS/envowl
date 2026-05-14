"use client";

import { FormEvent, useState } from "react";
import CardSpotlight from "@/components/CardSpotlight";
import { FadeIn } from "@/components/FadeIn";

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

      setMessage("Check your inbox — we sent your access links");
    } catch {
      setError("Could not recover access right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[70vh] border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <h1 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            Recover access
          </h1>
        </FadeIn>

        <FadeIn delay={0.06}>
          <CardSpotlight className="mx-auto mt-10 max-w-md rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={submit}>
              <label
                htmlFor="recover-email"
                className="mb-2 block text-sm font-medium text-neutral-700"
              >
                Email
              </label>
              <input
                id="recover-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-h-[44px] rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 outline-none ring-2 ring-transparent transition focus:border-accent focus:ring-accent/20"
                placeholder="you@example.com"
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send me my access"}
              </button>

              {message ? (
                <p className="mt-4 text-sm text-emerald-700">{message}</p>
              ) : null}
              {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
            </form>
          </CardSpotlight>
        </FadeIn>
      </div>
    </section>
  );
}
