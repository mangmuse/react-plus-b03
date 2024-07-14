import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        bottom: "0 4px 6px -1px rgba(247, 247, 247, 0.1), 4px 4px 6px -1px rgba(0, 0, 0, 0.06)",
      },
      keyframes: {
        animloader: {
          "0%": { height: "100%" },
          "100%": { height: "0%" },
        },
      },
      animation: {
        animloader: "animloader 6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
