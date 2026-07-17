import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earthy palette — exact hexes from the design brief
        cream: "#F5F1E8", // base background: warm beige / off-white
        paper: "#FBF8F1", // soft card surface, a shade lighter than cream
        sage: "#8A9A7E", // primary accent: soft sage green
        "sage-dark": "#788869", // hover state for sage fills
        olive: "#4A5D42", // secondary accent: deeper olive/forest green
        "olive-dark": "#3C4C36", // hover state for olive fills
        charcoal: "#2B2A26", // text: warm charcoal, never pure black
        clay: "#C4A484", // supporting neutral: soft terracotta / clay
        "clay-soft": "#E7D9C7", // tinted clay for tag/ribbon backgrounds
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        // Soft ~8–12px radius for buttons & cards
        btn: "10px",
        card: "16px",
      },
      boxShadow: {
        // Soft, subtle "paper on a table" shadows only — nothing techy
        paper: "0 1px 2px rgba(43, 42, 38, 0.04), 0 8px 24px rgba(43, 42, 38, 0.06)",
        "paper-lift": "0 2px 4px rgba(43, 42, 38, 0.06), 0 16px 40px rgba(43, 42, 38, 0.10)",
      },
      lineHeight: {
        relaxed: "1.7",
      },
      maxWidth: {
        content: "68rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
