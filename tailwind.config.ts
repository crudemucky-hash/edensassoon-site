import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        cream: "#F5F0E8",
        gold: "#C9A96E",
        stone: "#9E9589",
        "warm-gray": "#2A2825",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
