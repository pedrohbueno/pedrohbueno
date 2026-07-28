import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A14",
        surface: "#12121F",
        "surface-2": "#171728",
        border: "rgba(139, 92, 246, 0.22)",
        "border-soft": "rgba(139, 92, 246, 0.12)",
        ink: "#F5F4FA",
        muted: "#9997AC",
        purple: {
          DEFAULT: "#8B5CF6",
          deep: "#6D28D9",
          soft: "#A78BFA",
        },
        blue: {
          DEFAULT: "#3B82F6",
          soft: "#60A5FA",
        },
        pink: {
          DEFAULT: "#EC4899",
          soft: "#F472B6",
        },
        teal: {
          DEFAULT: "#14B8A6",
          soft: "#2DD4BF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,92,246,0.14), transparent)",
      },
      // keyframes: {
      //   float: {
      //     "0%, 100%": { transform: "translateY(0px)" },
      //     "50%": { transform: "translateY(-10px)" },
      //   },
      //   pulse-glow: {
      //     "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
      //     "50%": { opacity: "1", transform: "scale(1.15)" },
      //   },
      //   "fade-up": {
      //     "0%": { opacity: "0", transform: "translateY(16px)" },
      //     "100%": { opacity: "1", transform: "translateY(0)" },
      //   },
      // },
      // animation: {
      //   float: "float 6s ease-in-out infinite",
      //   "float-slow": "float 9s ease-in-out infinite",
      //   "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
      //   "fade-up": "fade-up 0.7s ease both",
      // },
    },
  },
  plugins: [],
};
export default config;
