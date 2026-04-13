import Link from "next/link";
import { SocialIcons } from "@/components/SocialIcons";
import { PLATFORM_NAME, SITE } from "@/lib/constants";

const linkClass =
  "text-base text-neutral-700 transition hover:text-neutral-900";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F2F2F2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <div className="flex flex-col gap-10 sm:gap-14 lg:flex-row lg:justify-between lg:gap-12">
          <div className="max-w-md shrink-0">
            <p className="text-lg font-semibold text-neutral-900">
              {PLATFORM_NAME}
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-600">
              {PLATFORM_NAME} — Where AI expertise meets real-world problems.
            </p>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12 md:gap-14 lg:max-w-3xl lg:justify-end">
            <div className="flex flex-col gap-4">
              <Link href="/for-businesses" className={linkClass}>
                For Businesses
              </Link>
              <Link href="/for-creators" className={linkClass}>
                For Creators
              </Link>
              <Link href="/resources" className={linkClass}>
                Resources
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/about" className={linkClass}>
                About
              </Link>
              <a
                href={`mailto:${SITE.contactEmail}`}
                className={linkClass}
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={linkClass}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm leading-relaxed text-neutral-500 sm:mt-14">
          <span className="block text-neutral-600">
            © {new Date().getFullYear()} LDS Ventures LLC · d/b/a {PLATFORM_NAME}
          </span>
          <span className="mt-1 block">All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
