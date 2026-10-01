const TOOLS = [
  { slug: "anthropic", label: "Anthropic" },
  { slug: "openai", label: "ChatGPT", src: "/logos/openai.svg" },
  { slug: "n8n", label: "n8n" },
  { slug: "zapier", label: "Zapier" },
  { slug: "langchain", label: "LangChain" },
  { slug: "huggingface", label: "Hugging Face" },
  { slug: "googlegemini", label: "Google Gemini" },
  { slug: "make", label: "Make" },
  { slug: "supabase", label: "Supabase" },
  { slug: "elevenlabs", label: "ElevenLabs" },
  { slug: "mistralai", label: "Mistral AI" },
  { slug: "python", label: "Python" },
  { slug: "perplexity", label: "Perplexity" },
  { slug: "vercel", label: "Vercel" },
  { slug: "airtable", label: "Airtable" },
  { slug: "ollama", label: "Ollama" },
  { slug: "cursor", label: "Cursor" },
];

export function StackMarquee() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="border-y border-paper/[0.08] py-10 sm:py-12">
      <p className="px-4 text-center text-sm text-paper/50">
        Creators on Envowl build with the tools you keep hearing about
      </p>
      <div className="marquee-mask mt-8 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
          {row.map((t, i) => (
            <li key={`${t.slug}-${i}`} aria-hidden={i >= TOOLS.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"src" in t ? t.src : `https://cdn.simpleicons.org/${t.slug}/F4F1EC`}
                alt={i < TOOLS.length ? t.label : ""}
                width={28}
                height={28}
                loading="lazy"
                className="h-7 w-7 opacity-45 transition hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
