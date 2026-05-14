"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import CardSpotlight from "@/components/CardSpotlight";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ShopBuyNowButtonProps = {
  packName: "claude-for-life" | "claude-for-business";
  packTitle: string;
  buttonClassName: string;
  buttonLabel: string;
};

export function ShopBuyNowButton({
  packName,
  packTitle,
  buttonClassName,
  buttonLabel,
}: ShopBuyNowButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const emailInputId = useId();

  const valid = emailRegex.test(email.trim());
  const showFieldError = touched && email.length > 0 && !valid;

  const close = useCallback(() => {
    setOpen(false);
    setTouched(false);
    setSubmitting(false);
    setServerMessage(null);
    setEmail("");
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const el = panelRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const onFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onFocusTrap);
    return () => window.removeEventListener("keydown", onFocusTrap);
  }, [open]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setServerMessage(null);
    if (!valid) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          packName,
        }),
      });
      const data = (await res.json()) as {
        success?: boolean;
        url?: string;
        message?: string;
      };
      if (!res.ok || !data.success || !data.url) {
        setServerMessage(data.message || "Could not start checkout. Try again.");
        return;
      }
      window.location.assign(data.url);
    } catch {
      setServerMessage("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => {
          setOpen(true);
          setServerMessage(null);
          setTouched(false);
          setEmail("");
        }}
      >
        {buttonLabel}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/35"
            aria-label="Close dialog"
            onClick={close}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[101] w-full max-w-md"
          >
            <CardSpotlight className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2
                id={titleId}
                className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl"
              >
                Continue to checkout
              </h2>
              <button
                type="button"
                onClick={close}
                className="-m-1 shrink-0 rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Enter your email for {packTitle}. We&apos;ll send your access link after
              payment and pre-fill Stripe checkout so you don&apos;t type it twice.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor={emailInputId} className="sr-only">
                  Email address
                </label>
                <input
                  ref={firstFieldRef}
                  id={emailInputId}
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched(true)}
                  placeholder="you@example.com"
                  className="w-full min-h-12 rounded-xl border-2 border-neutral-200 bg-white px-4 py-3.5 text-base text-neutral-900 outline-none ring-2 ring-transparent transition placeholder:text-neutral-400 focus:border-accent focus:ring-accent/20"
                />
                {showFieldError ? (
                  <p className="mt-2 text-sm text-red-600" role="alert">
                    Please enter a valid email address.
                  </p>
                ) : null}
              </div>

              {serverMessage ? (
                <p className="text-sm text-red-600" role="alert">
                  {serverMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Redirecting…" : "Continue to checkout"}
              </button>
            </form>
            </CardSpotlight>
          </div>
        </div>
      ) : null}
    </>
  );
}
