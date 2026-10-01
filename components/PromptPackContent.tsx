"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/site/PageHero";

export type PromptItem = {
  title: string;
  prompt: string;
};

function splitPromptContent(promptTitle: string, rawPrompt: string): {
  whenToUse: string;
  copyableBody: string;
} {
  const marker = "You are a";
  let splitIndex = rawPrompt.indexOf(marker);

  if (
    splitIndex === -1 &&
    (promptTitle === "Explain It Like I Know Nothing About It" ||
      promptTitle === "The Cold Outreach Writer")
  ) {
    splitIndex = rawPrompt.indexOf("You are ");
  }

  if (splitIndex === -1) {
    return {
      whenToUse: "",
      copyableBody: rawPrompt.trim(),
    };
  }

  return {
    whenToUse: rawPrompt.slice(0, splitIndex).trim(),
    copyableBody: rawPrompt.slice(splitIndex).trim(),
  };
}

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
    <>
      <PageHero compact eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 md:px-8">
        <div className="space-y-3">
          {prompts.map((item, i) => {
            const { whenToUse, copyableBody } = splitPromptContent(item.title, item.prompt);
            const copied = copiedTitle === item.title;

            return (
              <FadeIn key={item.title} delay={Math.min(i, 4) * 0.04}>
                <article className="rounded-[20px] border border-paper/[0.08] bg-ink-900 p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <p className="font-mono text-xs text-ember">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                        {item.title}
                      </h2>
                      {whenToUse ? (
                        <p className="max-w-2xl text-base leading-relaxed text-paper/60">{whenToUse}</p>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      onClick={() => copyPrompt(item.title, copyableBody)}
                      aria-live="polite"
                      className={`inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition active:scale-[0.98] ${
                        copied ? "bg-paper text-ink" : "bg-ember text-ink hover:bg-ember-soft"
                      }`}
                    >
                      {copied ? (
                        <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                      ) : (
                        <Copy className="h-4 w-4" strokeWidth={2} aria-hidden />
                      )}
                      {copied ? "Copied" : "Copy prompt"}
                    </button>
                  </div>

                  <pre className="mt-6 max-h-[28rem] overflow-auto rounded-2xl border border-paper/[0.06] bg-ink p-4 text-sm leading-relaxed text-paper/80 sm:p-5">
                    <code className="whitespace-pre-wrap break-words font-mono">{copyableBody}</code>
                  </pre>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}
