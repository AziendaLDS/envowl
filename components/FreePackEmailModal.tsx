"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import {
  BUTTON_PRIMARY_CLASS,
  SUBSCRIBE_INPUT_CLASS,
} from "@/lib/subscribe-classes";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FreePackEmailModalProps = {
  buttonClassName: string;
  buttonLabel: string;
};

export function FreePackEmailModal({
  buttonClassName,
  buttonLabel,
}: FreePackEmailModalProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  const valid = emailRegex.test(email.trim());
  const showFieldError = touched && email.length > 0 && !valid;

  const close = useCallback(() => {
    setOpen(false);
    setTouched(false);
    setSubmitting(false);
    setSuccess(false);
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
      const res = await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) {
        setServerMessage(data.message || "Something went wrong. Try again.");
        return;
      }
      setSuccess(true);
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
          setSuccess(false);
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
            className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
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
            <div className="rounded-[24px] border border-paper/10 bg-ink-900 p-6 shadow-[0_40px_120px_-30px_rgb(0_0_0_/_0.8)] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <h2
                id={titleId}
                className="font-display text-2xl font-bold tracking-tight text-paper"
              >
                {success ? "You are all set" : "Get your free starter pack"}
              </h2>
              <button
                type="button"
                onClick={close}
                className="-m-1 shrink-0 rounded-full p-2 text-paper/50 transition hover:bg-paper/10 hover:text-paper"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={2} aria-hidden />
              </button>
            </div>

            {success ? (
              <div className="mt-6 rounded-2xl border border-ember/40 bg-ember/10 px-5 py-5">
                <p className="text-base font-semibold text-paper">Check your inbox</p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  We sent a link to your Claude Starter Pack. If you do not see it in a few minutes,
                  check spam or promotions.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className={`mt-5 w-full ${BUTTON_PRIMARY_CLASS}`}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="free-pack-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="free-pack-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)}
                    placeholder="you@example.com"
                    className={SUBSCRIBE_INPUT_CLASS}
                  />
                  {showFieldError ? (
                    <p className="mt-2 text-sm text-red-300" role="alert">
                      Please enter a valid email address.
                    </p>
                  ) : null}
                </div>

                {serverMessage ? (
                  <p className="text-sm text-red-300" role="alert">
                    {serverMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full ${BUTTON_PRIMARY_CLASS}`}
                >
                  {submitting ? "Sending…" : "Send me the prompts"}
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
