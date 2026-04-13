import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PLATFORM_NAME } from "@/lib/constants";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: `${PLATFORM_NAME} — AI Talent Marketplace`,
    template: `%s · ${PLATFORM_NAME}`,
  },
  description:
    "Connect with vetted AI experts — or join as a creator. Curated, trusted, built for real projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#F2F2F2] font-sans text-[0.9375rem] leading-relaxed antialiased text-neutral-900 sm:text-[1.0625rem]`}
      >
        <Navbar />
        <main className="min-h-[50vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
