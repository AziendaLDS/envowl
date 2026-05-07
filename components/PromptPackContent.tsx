"use client";

import { useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import { FadeIn } from "@/components/FadeIn";

export type PromptItem = {
  title: string;
  prompt: string;
};

type PromptPackContentProps = {
  eyebrow: string;
  title: string;
  description: string;
  prompts: PromptItem[];
};

export function PromptPackContent({
  eyebrow,
  title,
  description,
  prompts,
}: PromptPackContentProps) {
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const copyPrompt = async (promptTitle: string, promptText: string) => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopiedTitle(promptTitle);
      window.setTimeout(() => {
        setCopiedTitle((current) => (current === promptTitle ? null : current));
      }, 1800);
    } catch {
      setCopiedTitle(null);
    }
  };

  return (
    <section className="border-b border-neutral-200 bg-[#F2F2F2] py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-6 md:px-8">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg">
            {description}
          </p>
        </FadeIn>

        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {prompts.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <BorderGlow
                className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
                backgroundColor="#ffffff"
                borderRadius={24}
                glowColor="16 90 56"
                glowRadius={24}
                edgeSensitivity={30}
                coneSpread={24}
                fillOpacity={0.25}
                colors={["#f54927", "#f97316", "#fb7185"]}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
                    {item.title}
                  </h2>
                  <button
                    type="button"
                    onClick={() => copyPrompt(item.title, item.prompt)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    {copiedTitle === item.title ? "Copied" : "Copy"}
                  </button>
                </div>

                <pre className="mt-5 overflow-x-auto rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-800 sm:mt-6 sm:p-5">
                  <code className="whitespace-pre-wrap break-words font-mono">
                    {item.prompt}
                  </code>
                </pre>
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
