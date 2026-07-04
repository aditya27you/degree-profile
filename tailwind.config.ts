import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b3a60", // Deep blue/navy
          dark: "#07253f",
          light: "#f0f7ff",
        },
        accent: {
          orange: "#f38612", // Logo orange
        },
        text: {
          dark: "#1f2e4d",
          body: "#495874",
          light: "#7e8da8",
        },
        bg: {
          page: "#f6f8fb",
        }
      },
      fontFamily: {
        title: ["var(--font-outfit)", "Outfit", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        premium: "0 4px 20px rgba(31, 46, 77, 0.04)",
        premiumHover: "0 6px 24px rgba(31, 46, 77, 0.08)",
      }
    },
  },
  plugins: [],
};
export default config;
