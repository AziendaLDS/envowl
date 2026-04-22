/**
 * Reads Envowl resource markdown from Downloads and writes web/lib/articles-content.json
 * Run from repo: node web/scripts/build-articles-from-md.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_MD = path.join(__dirname, "../content/resources");
const DOWNLOADS = path.join(process.env.HOME || "", "Downloads");

function resolveMd(name) {
  const inRepo = path.join(REPO_MD, name);
  if (fs.existsSync(inRepo)) return inRepo;
  return path.join(DOWNLOADS, name);
}

const files = [
  { path: () => resolveMd("envowl-articles.md"), mode: "bundle3" },
  { path: () => resolveMd("article-4-operations.md"), mode: "single" },
  { path: () => resolveMd("article-5-prompting.md"), mode: "single" },
  { path: () => resolveMd("article-6-trends.md"), mode: "single" },
  { path: () => resolveMd("article-7-openclaw.md"), mode: "single" },
  { path: () => resolveMd("article-8-gold-rush.md"), mode: "single" },
];

function parseMetaLine(line) {
  const m = line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
  if (!m) return null;
  return { key: m[1].trim().toLowerCase(), value: m[2].trim() };
}

function slugFromPath(slugLine) {
  const s = slugLine.replace(/^\/resources\//, "").replace(/^\//, "");
  return s.trim();
}

/** @returns {{ type: string, text?: string, items?: string[], level?: number }[]} */
function bodyToBlocks(body) {
  const blocks = [];
  let i = 0;
  const lines = body.split("\n");

  function skipBlank() {
    while (i < lines.length && lines[i].trim() === "") i++;
  }

  while (i < lines.length) {
    skipBlank();
    if (i >= lines.length) break;
    const line = lines[i];

    if (line.trim() === "---") {
      i++;
      continue;
    }

    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      i++;
      const code = [];
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      blocks.push({ type: "pre", text: code.join("\n"), lang: lang || undefined });
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (/^\d+\.\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].replace(/^\d+\.\s*/, "").trim());
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const items = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        const raw = lines[i].trim().replace(/^[-*]\s+/, "");
        items.push(raw);
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (line.startsWith("**") && line.includes(":**")) {
      const para = [];
      while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("###") && !lines[i].startsWith("##") && lines[i].trim() !== "---") {
        para.push(lines[i]);
        i++;
      }
      const text = para.join("\n").trim();
      if (text) blocks.push({ type: "p", text });
      continue;
    }

    const para = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      lines[i].trim() !== "---" &&
      !lines[i].startsWith("###") &&
      !lines[i].startsWith("##") &&
      !lines[i].startsWith("```")
    ) {
      para.push(lines[i]);
      i++;
    }
    const text = para.join("\n").trim();
    if (text) {
      if (text.startsWith("*") && text.endsWith("*") && !text.startsWith("**")) {
        blocks.push({ type: "p", text: text.slice(1, -1), italic: true });
      } else {
        blocks.push({ type: "p", text });
      }
    }
  }

  return blocks;
}

function stripTrailingCta(blocks) {
  const out = [...blocks];
  while (out.length > 0) {
    const last = out[out.length - 1];
    if (
      last.type === "p" &&
      /join the waitlist|Envowl resource library|Browse the|Envowl launches Summer|beehiiv|founder pricing/i.test(
        last.text,
      )
    ) {
      out.pop();
      continue;
    }
    break;
  }
  return out;
}

function parseBundle3(raw) {
  const articles = [];
  const parts = raw.split(/^## ARTICLE \d+/m);
  for (let p = 1; p < parts.length; p++) {
    const chunk = parts[p];
    const lines = chunk.split("\n");
    const meta = {};
    let bi = 0;
    while (bi < lines.length) {
      const pl = parseMetaLine(lines[bi]);
      if (pl) {
        if (pl.key === "title") meta.title = pl.value;
        if (pl.key === "category") meta.category = pl.value;
        if (pl.key === "read time") meta.readTime = pl.value;
        if (pl.key === "slug") meta.slug = slugFromPath(pl.value);
        if (pl.key === "meta description") meta.teaser = pl.value;
        bi++;
        continue;
      }
      if (lines[bi].trim() === "---") {
        bi++;
        break;
      }
      bi++;
    }
    let body = lines.slice(bi).join("\n").replace(/\n---\n---\s*$/m, "").trim();
    body = body.replace(/\n## PUBLISHING NOTES[\s\S]*$/m, "").trim();
    let blocks = bodyToBlocks(body);
    blocks = stripTrailingCta(blocks);
    articles.push({
      slug: meta.slug,
      tag: meta.category,
      title: meta.title,
      teaser: meta.teaser,
      readTime: meta.readTime,
      date: "Apr 14, 2026",
      blocks,
    });
  }
  return articles;
}

function parseSingle(raw) {
  const lines = raw.split("\n");
  let title = "";
  let category = "";
  let readTime = "";
  let slug = "";
  let teaser = "";
  let i = 0;
  if (lines[0]?.startsWith("# ")) {
    title = lines[0].slice(2).trim();
    i = 1;
  }
  while (i < lines.length) {
    const pl = parseMetaLine(lines[i]);
    if (pl) {
      if (pl.key === "category") category = pl.value;
      if (pl.key === "read time") readTime = pl.value;
      if (pl.key === "slug") slug = slugFromPath(pl.value);
      if (pl.key === "meta description") teaser = pl.value;
      i++;
      continue;
    }
    if (lines[i].trim() === "---") {
      i++;
      break;
    }
    i++;
  }
  let body = lines.slice(i).join("\n").trim();
  body = body.replace(/\n## PUBLISHING NOTES[\s\S]*$/m, "").trim();
  let blocks = bodyToBlocks(body);
  blocks = stripTrailingCta(blocks);
  return {
    slug,
    tag: category,
    title,
    teaser,
    readTime,
    date: "Apr 14, 2026",
    blocks,
  };
}

function main() {
  const all = [];
  for (const f of files) {
    const p = f.path();
    if (!fs.existsSync(p)) {
      console.error("Missing file:", p);
      process.exit(1);
    }
    const raw = fs.readFileSync(p, "utf8");
    if (f.mode === "bundle3") {
      all.push(...parseBundle3(raw));
    } else {
      all.push(parseSingle(raw));
    }
  }
  if (all.length !== 8) {
    console.error("Expected 8 articles, got", all.length);
    process.exit(1);
  }
  const outPath = path.join(__dirname, "../lib/articles-content.json");
  fs.writeFileSync(outPath, JSON.stringify(all, null, 2), "utf8");
  console.log("Wrote", outPath);
}

main();
