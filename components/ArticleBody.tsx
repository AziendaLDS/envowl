import Image from "next/image";
import Link from "next/link";
import type { ArticleBlock } from "@/lib/articles";

function RichLinks({ text }: { text: string }) {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      out.push(<span key={key++}>{text.slice(last, m.index)}</span>);
    }
    let href = m[2];
    if (href.startsWith("https://envowl.com")) {
      href = href.replace(/^https:\/\/envowl\.com/, "") || "/";
    }
    const label = m[1];
    if (href.startsWith("http")) {
      out.push(
        <a
          key={key++}
          href={href}
          className="font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>,
      );
    } else {
      out.push(
        <Link
          key={key++}
          href={href}
          className="font-semibold text-paper underline decoration-ember decoration-2 underline-offset-4 hover:text-ember"
        >
          {label}
        </Link>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    out.push(<span key={key++}>{text.slice(last)}</span>);
  }
  return <>{out}</>;
}

function Inline({ text }: { text: string }) {
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {boldParts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i} className="font-semibold text-paper">{part.slice(2, -2)}</strong>;
        }
        return <RichLinks key={i} text={part} />;
      })}
    </>
  );
}

export function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "banner") {
          return (
            <figure
              key={i}
              className="mb-10 flex w-full justify-center overflow-hidden rounded-[20px] border border-paper/[0.08] bg-[#000b1a] sm:mb-12"
            >
              <Image
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className="h-auto max-h-[min(62svh,571px)] w-auto max-w-full object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={i === 0}
              />
            </figure>
          );
        }
        if (block.type === "p") {
          const className = `mb-5 text-base leading-[1.8] text-paper/70 last:mb-0 sm:mb-6 sm:text-lg${
            block.italic ? " italic" : ""
          }`;
          return (
            <p key={i} className={className}>
              <Inline text={block.text} />
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mb-4 mt-14 font-display text-2xl font-bold tracking-[-0.02em] text-paper first:mt-0 sm:text-3xl"
            >
              <Inline text={block.text} />
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="mb-3 mt-10 font-display text-xl font-semibold tracking-tight text-paper first:mt-0 sm:text-2xl"
            >
              <Inline text={block.text} />
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="mb-6 list-disc space-y-2 pl-6 text-base leading-[1.8] text-paper/70 marker:text-ember sm:text-lg"
            >
              {block.items.map((item, j) => (
                <li key={j}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol
              key={i}
              className="mb-6 list-decimal space-y-3 pl-6 text-base leading-[1.8] text-paper/70 marker:font-semibold marker:text-ember sm:text-lg"
            >
              {block.items.map((item, j) => (
                <li key={j}>
                  <Inline text={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "pre") {
          return (
            <pre
              key={i}
              className="mb-6 overflow-x-auto rounded-2xl border border-paper/[0.08] bg-ink-900 p-4 text-left text-sm leading-relaxed text-paper/85 sm:p-5 sm:text-[0.8125rem]"
            >
              <code className="font-mono">{block.text}</code>
            </pre>
          );
        }
        return null;
      })}
    </>
  );
}
