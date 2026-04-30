"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/for-creators", label: "For Creators" },
  { href: "/for-professionals", label: "For Professionals" },
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/resources", label: "Resources" },
];

function MenuIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 relative overflow-visible border-b border-neutral-200/80 bg-[#F2F2F2]/85 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.25rem] max-w-7xl items-center justify-between gap-2 overflow-visible py-2.5 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:min-h-[4.75rem] sm:gap-3 sm:pl-6 sm:pr-6 md:py-0 md:pl-[max(2rem,env(safe-area-inset-left))] md:pr-[max(2rem,env(safe-area-inset-right))]">
        <Link
          href="/"
          className="flex shrink-0 items-center self-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Envowl"
            width={240}
            height={72}
            className="h-9 w-auto max-h-9 max-w-[min(140px,42vw)] self-center object-contain bg-transparent sm:h-[52px] sm:max-h-[52px] sm:max-w-none"
            style={{ objectFit: "contain", background: "transparent" }}
            priority
            quality={85}
            sizes="(max-width: 768px) 150px, 180px"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 text-base font-medium text-neutral-700 md:flex md:gap-10"
          aria-label="Main"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-neutral-900"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#waitlist"
          className="hidden min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-base font-semibold text-white transition hover:bg-accent-hover md:inline-flex"
        >
          Join Waitlist
        </Link>

        <div className="flex items-center gap-1.5 md:hidden">
          <Link
            href="/#waitlist"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
            onClick={() => setOpen(false)}
          >
            Waitlist
          </Link>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-neutral-900 hover:bg-neutral-200/80"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/35 md:hidden"
              aria-hidden
              tabIndex={-1}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="mobile-menu"
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-0 right-0 top-full z-50 border-b border-neutral-200 bg-[#F2F2F2] shadow-lg md:hidden"
              aria-label="Mobile"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-0.5 py-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:pl-6 sm:pr-6 md:pl-[max(2rem,env(safe-area-inset-left))] md:pr-[max(2rem,env(safe-area-inset-right))]">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-3.5 text-base font-medium text-neutral-800 active:bg-neutral-200/70"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
