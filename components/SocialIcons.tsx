import type { ReactNode } from "react";
import { SITE } from "@/lib/constants";

type IconLink = {
  name: string;
  href: string;
  className: string;
  children: ReactNode;
};

function IconShell({
  href,
  name,
  className,
  children,
}: {
  href: string;
  name: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md transition hover:opacity-90 hover:ring-2 hover:ring-white/30 ${className}`}
    >
      {children}
    </a>
  );
}

/** Colored circular brand marks — order: Instagram, TikTok, X, YouTube, LinkedIn, Reddit */
export function SocialIcons() {
  const items: IconLink[] = [
    {
      name: "Instagram",
      href: SITE.instagram,
      className:
        "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]",
      children: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325 1.266-.058 1.646-.07 4.85-.07zM12 7a5 5 0 100 10 5 5 0 000-10zm6.406-.844a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: SITE.tiktok,
      className: "bg-black",
      children: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: SITE.twitter,
      className: "bg-black",
      children: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: SITE.youtube,
      className: "bg-[#FF0000]",
      children: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: SITE.linkedin,
      className: "bg-[#0A66C2]",
      children: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Reddit",
      href: SITE.reddit,
      className: "bg-[#FF4500]",
      children: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <ellipse cx="12" cy="15" rx="6" ry="5" fill="white" />
          <line
            x1="12"
            y1="6"
            x2="12"
            y2="10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="4.5" r="2.2" fill="white" />
          <circle cx="9.2" cy="14" r="1.35" fill="#1a1a1a" />
          <circle cx="14.8" cy="14" r="1.35" fill="#1a1a1a" />
          <path
            d="M9 17.2c0.9 1 2.1 1.2 3 1.2s2.1-.2 3-1.2"
            stroke="#1a1a1a"
            strokeWidth="1.25"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3.5">
      {items.map((item) => (
        <IconShell
          key={item.name}
          href={item.href}
          name={item.name}
          className={item.className}
        >
          {item.children}
        </IconShell>
      ))}
    </div>
  );
}
