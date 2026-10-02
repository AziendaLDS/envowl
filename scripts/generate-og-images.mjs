// Renders the default OG image (public/og-image.png) and one card per article
// (public/og/<slug>.png) at 1200x630. Run with: npm run og:images
// Uses Next's bundled ImageResponse (satori) so no extra dependencies are needed.
// Fonts: Archivo (same family as the site's --font-display), bundled in scripts/fonts.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/dist/compiled/@vercel/og/index.node.js");

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const FONT_DIR = path.join(root, "scripts/fonts"); // Archivo (OFL), the site's display font

// Archivo Expanded (wdth 125) to match the site's .font-display: heavy for headlines,
// hairline for the highlighted phrase, medium for small text.
const fonts = [
  { name: "Display", data: readFileSync(path.join(FONT_DIR, "ArchivoExpanded-ExtraBold.ttf")), weight: 800 },
  { name: "Hairline", data: readFileSync(path.join(FONT_DIR, "ArchivoExpanded-ExtraLight.ttf")), weight: 200 },
  { name: "Body", data: readFileSync(path.join(FONT_DIR, "ArchivoExpanded-Medium.ttf")), weight: 500 },
];

const PAPER = "#F4F1EC";
const INK = "#0A0A0B";
const ACCENT = "#F54927";

const el = (type, style, children) => ({ type, props: { style, children } });

// Shared dark backdrop: ember glow top-right, faint dot field, hairline border.
const backdrop = {
  backgroundColor: INK,
  backgroundImage: "radial-gradient(circle at 88% 0%, rgba(245,73,39,0.38) 0%, rgba(245,73,39,0.12) 38%, rgba(10,10,11,0) 68%)",
};
const dots = [];
for (let y = 0; y < 630; y += 30) for (let x = 0; x < 1200; x += 30) {
  const d = Math.hypot(x - 1050, y - 120);
  if (d < 560) dots.push(el("div", { position: "absolute", left: x, top: y, width: 3, height: 3, borderRadius: 2, background: `rgba(244,241,236,${(0.22 * (1 - d / 560)).toFixed(3)})` }, ""));
}
const frame = el("div", { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, border: "1px solid rgba(244,241,236,0.1)" }, "");

// logo-dark.png has near-black V/O/W lettering; recolor it to paper so it reads on the dark card.
const sharp = require("sharp");
const { data: px, info } = await sharp(path.join(root, "public/logo-dark.png")).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < px.length; i += 4) {
  if (px[i] < 40 && px[i + 1] < 40 && px[i + 2] < 40) { px[i] = 244; px[i + 1] = 241; px[i + 2] = 236; }
  else if (px[i] > 225 && px[i + 1] > 225 && px[i + 2] > 220) px[i + 3] = Math.round(px[i + 3] * 0.1); // ghost owl wings -> faint
}
const logo = `data:image/png;base64,${(await sharp(px, { raw: info }).png().toBuffer()).toString("base64")}`;
const LOGO_RATIO = 866 / 558;


const pill = (text, solid) =>
  el("div", { display: "flex", alignItems: "center", fontFamily: "Body", fontSize: 24, padding: "8px 22px", borderRadius: 999,
    color: solid ? INK : "rgba(244,241,236,0.75)", background: solid ? ACCENT : "rgba(244,241,236,0.06)",
    border: solid ? "none" : "1px solid rgba(244,241,236,0.14)" }, text);

const card = (children) =>
  el("div", { width: "100%", height: "100%", display: "flex", position: "relative", ...backdrop }, [
    ...dots, frame,
    el("div", { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "52px 80px", position: "relative" }, children),
  ]);

const logoImg = (w) => ({ type: "img", props: { src: logo, width: w, height: Math.round(w / LOGO_RATIO) } });
const footer = el("div", { display: "flex", alignItems: "center", fontFamily: "Body", fontSize: 26, color: "rgba(244,241,236,0.6)" }, [
  el("div", { display: "flex", width: 48, height: 4, background: ACCENT, marginRight: 18 }, ""),
  el("span", { display: "flex" }, "envowl.com"),
]);

function defaultCard() {
  const h = { display: "flex", fontFamily: "Display", fontSize: 60, lineHeight: 1.08, whiteSpace: "nowrap", letterSpacing: -1, color: PAPER };
  return card([
    el("div", { display: "flex", alignItems: "center", justifyContent: "space-between" }, [
      logoImg(190),
      el("div", { display: "flex" }, [el("div", { display: "flex", marginRight: 12 }, pill("Waitlist open", true)), pill("Launching Summer 2027", false)]),
    ]),
    el("div", { display: "flex", flexDirection: "column" }, [
      el("div", h, "HIRE AI BUILDERS WHO\u2019VE"),
      el("div", { ...h, fontFamily: "Hairline", color: ACCENT }, [el("span", { display: "flex", marginRight: 8 }, "ACTUALLY"), el("span", { display: "flex" }, "SHIPPED.")]),
    ]),
    el("div", { display: "flex", justifyContent: "space-between", alignItems: "center" }, [
      el("div", { display: "flex", fontFamily: "Body", fontSize: 28, color: "rgba(244,241,236,0.65)" }, "The AI talent marketplace."),
      footer,
    ]),
  ]);
}

function articleCard(article) {
  const len = article.title.length;
  const size = len > 90 ? 46 : len > 60 ? 54 : 62;
  return card([
    el("div", { display: "flex", alignItems: "center", justifyContent: "space-between" }, [logoImg(190), pill(article.tag.toUpperCase(), true)]),
    el("div", { display: "flex", fontFamily: "Display", fontSize: size, lineHeight: 1.08, letterSpacing: -1, color: PAPER }, article.title.toUpperCase()),
    el("div", { display: "flex" }, footer),
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
