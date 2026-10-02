// Renders the default OG image (public/og-image.png) and one card per article
// (public/og/<slug>.png) at 1200x630. Run with: npm run og:images
// Uses Next's bundled ImageResponse (satori) so no extra dependencies are needed.
// Fonts: Arial Black / Arial Bold from macOS are read at generation time only; the
// output is a PNG, so nothing needs to be installed in production.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/dist/compiled/@vercel/og/index.node.js");

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const FONT_DIR = "/System/Library/Fonts/Supplemental";

const fonts = [
  { name: "Display", data: readFileSync(path.join(FONT_DIR, "Arial Black.ttf")), weight: 900 },
  { name: "Body", data: readFileSync(path.join(FONT_DIR, "Arial Bold.ttf")), weight: 700 },
];

const PAPER = "#F4F1EC";
const INK = "#0A0A0B";
const ACCENT = "#F94C2B";

const logo = `data:image/png;base64,${readFileSync(path.join(root, "public/logo-dark.png")).toString("base64")}`;
const LOGO_RATIO = 866 / 558;

const el = (type, style, children) => ({ type, props: { style, children } });

function defaultCard() {
  const w = 700;
  const line = { display: "flex", fontFamily: "Display", fontSize: 58, lineHeight: 1, color: INK };
  return el("div", { width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: PAPER }, [
    { type: "img", props: { src: logo, width: w, height: Math.round(w / LOGO_RATIO), style: { marginTop: -130, marginBottom: -20 } } },
    el("div", { ...line, marginTop: 0 }, [
      el("span", { display: "flex", marginRight: 18 }, "THE"),
      el("span", { display: "flex", marginRight: 18, color: ACCENT }, "AI"),
      el("span", { display: "flex" }, "TALENT MARKETPLACE"),
    ]),
    el("div", { display: "flex", marginTop: 28, width: 120, height: 8, background: ACCENT }, ""),
  ]);
}

function articleCard(article) {
  const len = article.title.length;
  const size = len > 90 ? 52 : len > 60 ? 62 : 72;
  const w = 220;
  return el("div", { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: PAPER, padding: "64px 80px" }, [
    el("div", { display: "flex", alignItems: "center", justifyContent: "space-between" }, [
      { type: "img", props: { src: logo, width: w, height: Math.round(w / LOGO_RATIO) } },
      el("div", { display: "flex", fontFamily: "Body", fontSize: 26, color: "#fff", background: ACCENT, padding: "10px 24px", borderRadius: 999 }, article.tag.toUpperCase()),
    ]),
    el("div", { display: "flex", fontFamily: "Display", fontSize: size, lineHeight: 1.08, color: INK, letterSpacing: -1 }, article.title),
    el("div", { display: "flex", alignItems: "center", fontFamily: "Body", fontSize: 28, color: INK }, [
      el("div", { display: "flex", width: 56, height: 8, background: ACCENT, marginRight: 20 }, ""),
      el("span", { display: "flex" }, "envowl.com/resources"),
    ]),
  ]);
}

async function render(node, outPath) {
  const res = new ImageResponse(node, { width: 1200, height: 630, fonts });
  writeFileSync(outPath, Buffer.from(await res.arrayBuffer()));
  console.log("wrote", path.relative(root, outPath));
}

const articles = JSON.parse(readFileSync(path.join(root, "lib/articles-content.json"), "utf8"));
const outDir = path.join(root, "public/og");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

await render(defaultCard(), path.join(root, "public/og-image.png"));
for (const a of articles) await render(articleCard(a), path.join(outDir, `${a.slug}.png`));
