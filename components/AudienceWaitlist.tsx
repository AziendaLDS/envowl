"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AudienceSubscribeForm } from "@/components/AudienceSubscribeForm";
import BorderGlow from "@/components/BorderGlow";
import { WAITLIST_MICROCOPY_SHORT } from "@/lib/constants";

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
    <BorderGlow
      id="audience-waitlist"
      className="mx-auto mt-12 w-full min-w-0 max-w-xl scroll-mt-24 rounded-3xl border border-neutral-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:mt-16 sm:scroll-mt-28 sm:p-8 md:p-10"
      backgroundColor="#ffffff"
      borderRadius={24}
      glowColor="16 90 56"
      glowRadius={28}
      edgeSensitivity={30}
      coneSpread={24}
      fillOpacity={0.3}
      colors={["#f54927", "#f97316", "#fb7185"]}
    >
      <p className="text-center text-base font-medium text-neutral-900">
        Join the waitlist
      </p>
      <div className="mt-5 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
        <button
          type="button"
          onClick={() => setType("client")}
          className={`min-h-[44px] w-full rounded-full px-4 py-2.5 text-sm font-semibold transition sm:w-auto sm:px-5 ${
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
          className={`min-h-[44px] w-full rounded-full px-4 py-2.5 text-sm font-semibold transition sm:w-auto sm:px-5 ${
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
          source={`homepage-audience-${type}`}
          buttonLabel={
            type === "client" ? "Join as a Client" : "Apply as a Creator"
          }
        />
      </div>
      <p className="mt-4 text-center text-base text-neutral-600">
        {WAITLIST_MICROCOPY_SHORT}
      </p>
    </BorderGlow>
  );
}
