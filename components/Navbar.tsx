"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/for-businesses", label: "Businesses" },
  { href: "/for-professionals", label: "Professionals" },
  { href: "/for-creators", label: "Creators" },
  { href: "/resources", label: "Resources" },
  { href: "/shop", label: "Shop" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Transparent over each page's hero, solid once content scrolls underneath.
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 12));
  useEffect(() => setScrolled(window.scrollY > 12), []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top,0px)] text-paper transition-[background-color,border-color,backdrop-filter] duration-300 ${
        // No backdrop-filter while the menu is open: it would become the containing
        // block for the fixed backdrop below and clip it to the header's height.
        open
          ? "border-paper/[0.08] bg-ink"
          : scrolled
            ? "border-paper/[0.08] bg-ink/95 backdrop-blur-xl"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:px-6 md:h-[4.5rem] md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Envowl home"
        >
          <Image
            src="/logo-dark.png"
            alt="Envowl"
            width={866}
            height={558}
            className="h-9 w-auto md:h-10"
            priority
            sizes="80px"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  active ? "text-paper" : "text-paper/60 hover:text-paper"
                }`}
              >
                {l.label}
                {active ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-ember"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#waitlist"
            className="group inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-full bg-ember px-4 text-sm font-semibold text-ink transition hover:bg-ember-soft active:scale-[0.98] md:px-5"
            onClick={() => setOpen(false)}
          >
            Join the waitlist
            <ArrowUpRight
              className="hidden h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
              strokeWidth={2}
              aria-hidden
            />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-paper transition hover:bg-paper/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} aria-hidden />
            )}
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
              className="fixed inset-0 top-16 z-40 bg-ink/60 md:hidden"
              aria-hidden
              tabIndex={-1}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="mobile-menu"
              id="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 top-full z-50 border-b border-paper/[0.08] bg-ink md:hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col py-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.25 }}
                  >
                    <Link
                      href={l.href}
                      className="block rounded-xl px-3 py-3.5 font-display text-2xl font-semibold tracking-tight text-paper active:bg-paper/10"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
