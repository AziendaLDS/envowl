"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/for-creators", label: "For Creators" },
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
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#F2F2F2]/85 backdrop-blur-md relative">
      <div className="mx-auto flex min-h-[3.5rem] max-w-7xl items-center justify-between gap-2 px-4 py-2.5 sm:min-h-[4.5rem] sm:gap-3 sm:px-6 md:px-8 md:py-0">
        <Link
          href="/"
          className="relative shrink-0 flex h-8 w-[7.5rem] items-center sm:h-9 sm:w-[8.5rem]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Envowl"
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 120px, 136px"
            priority
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

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/35 md:hidden"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-menu"
            className="absolute left-0 right-0 top-full z-50 border-b border-neutral-200 bg-[#F2F2F2] px-4 py-3 shadow-lg md:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-0.5">
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
          </nav>
        </>
      ) : null}
    </header>
  );
}
