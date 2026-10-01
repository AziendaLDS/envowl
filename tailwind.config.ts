import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        accent: "var(--accent)",
        ink: {
          DEFAULT: "#0A0A0B",
          900: "#111113",
          800: "#17171A",
          700: "#222226",
          600: "#2E2E33",
        },
        paper: "#F4F1EC",
        ember: {
          DEFAULT: "#F54927",
          soft: "#FF7A5C",
        },
        "accent-hover": "var(--accent-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
