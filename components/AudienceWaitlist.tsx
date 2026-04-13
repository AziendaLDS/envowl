"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AudienceSubscribeForm } from "@/components/AudienceSubscribeForm";

export function AudienceWaitlist() {
  const searchParams = useSearchParams();
  const q = searchParams.get("audience");
  const initial: "client" | "creator" =
    q === "creator" ? "creator" : "client";
  const [type, setType] = useState<"client" | "creator">(initial);

  useEffect(() => {
    setType(initial);
  }, [initial]);

  return (
    <div
      id="audience-waitlist"
      className="mx-auto mt-12 max-w-xl scroll-mt-24 rounded-3xl border border-neutral-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:mt-16 sm:scroll-mt-28 sm:p-8 md:p-10"
    >
      <p className="text-center text-base font-medium text-neutral-900">
        Join the waitlist
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setType("client")}
          className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
            type === "client"
              ? "bg-neutral-900 text-white"
              : "bg-neutral-200/80 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          I want to use AI
        </button>
        <button
          type="button"
          onClick={() => setType("creator")}
          className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-semibold transition sm:px-5 ${
            type === "creator"
              ? "bg-accent text-white"
              : "bg-neutral-200/80 text-neutral-600 hover:bg-neutral-200"
          }`}
        >
          I build with AI
        </button>
      </div>
      <div className="mt-8">
        <AudienceSubscribeForm
          type={type}
          source={`audience-${type}`}
          buttonLabel={
            type === "client" ? "Join as a Client" : "Apply as a Creator"
          }
        />
      </div>
      <p className="mt-4 text-center text-base text-neutral-600 sm:text-left">
        Free to join. No spam.
      </p>
    </div>
  );
}
