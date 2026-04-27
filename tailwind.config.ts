import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08080a",
          900: "#0d0d0f",
          800: "#16161a",
          700: "#22222a",
          600: "#33333d",
          500: "#55555f",
        },
        lime: {
          50: "#f7fee7",
          100: "#ecfccb",
          200: "#d9f99d",
          300: "#bef264",
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d",
          700: "#4d7c0f",
        },
        bone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
        },
        signal: {
          amber: "#fbbf24",
          rose: "#fb7185",
          sky: "#7dd3fc",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "Menlo", "Consolas", "monospace"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        blink: "blink 1s steps(2) infinite",
        boot: "boot 0.6s ease-out forwards",
        scan: "scan 6s linear infinite",
        glow: "glow 2.4s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        boot: {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glow: {
          "0%": { textShadow: "0 0 6px rgba(163,230,53,0.25)" },
          "100%": { textShadow: "0 0 14px rgba(163,230,53,0.55)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(163,230,53,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,230,53,0.06) 1px, transparent 1px)",
        "grid-coarse":
          "linear-gradient(to right, rgba(163,230,53,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(163,230,53,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "24px 24px",
        "grid-lg": "64px 64px",
      },
    },
  },
  plugins: [],
};
export default config;
