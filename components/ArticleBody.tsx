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
          className="font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
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
          className="font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
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
          return <strong key={i}>{part.slice(2, -2)}</strong>;
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
              className="relative mb-10 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-sm sm:mb-12"
            >
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
                priority={i === 0}
              />
            </figure>
          );
        }
        if (block.type === "p") {
          const className = `mb-5 text-base leading-relaxed text-neutral-600 last:mb-0 sm:mb-6 sm:text-lg${
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
              className="mb-4 mt-12 text-2xl font-semibold tracking-tight text-neutral-900 first:mt-0 sm:text-3xl"
            >
              <Inline text={block.text} />
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="mb-3 mt-10 text-xl font-semibold tracking-tight text-neutral-900 first:mt-0 sm:text-2xl"
            >
              <Inline text={block.text} />
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="mb-6 list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-600 sm:text-lg"
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
              className="mb-6 list-decimal space-y-3 pl-6 text-base leading-relaxed text-neutral-600 sm:text-lg"
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
              className="mb-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-4 text-left text-sm leading-relaxed text-neutral-800 shadow-sm sm:p-5 sm:text-[0.8125rem]"
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
