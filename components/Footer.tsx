import Link from "next/link";
import Image from "next/image";
import { SocialIcons } from "@/components/SocialIcons";
import { PLATFORM_NAME, SITE } from "@/lib/constants";

const linkClass = "text-sm text-paper/60 transition hover:text-paper";

const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Marketplace",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "For Businesses", href: "/for-businesses" },
      { label: "For Professionals", href: "/for-professionals" },
      { label: "For Creators", href: "/for-creators" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Shop", href: "/shop" },
      { label: "About", href: "/about" },
      { label: "Contact", href: `mailto:${SITE.contactEmail}`, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="night relative overflow-hidden border-t border-paper/[0.08]">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 md:px-8 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex" aria-label="Envowl home">
              <Image
                src="/logo-dark.png"
                alt="Envowl"
                width={866}
                height={558}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-5 text-base leading-relaxed text-paper/60">
              The AI talent marketplace. Vetted builders, real projects, no
              guesswork.
            </p>
            <div className="mt-8">
              <SocialIcons />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-paper">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a href={l.href} className={linkClass}>
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={linkClass}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none mt-16 select-none text-center font-display text-[22vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgb(244_241_236_/_0.2)] md:mt-24 lg:text-[15rem]"
        >
          envowl
        </p>

        <div className="mt-8 flex flex-col gap-2 border-t border-paper/[0.08] pt-6 text-sm text-paper/45 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} LDS Ventures LLC, d/b/a {PLATFORM_NAME}
          </span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
