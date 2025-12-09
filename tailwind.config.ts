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
          50: "#e0f2fe",
          100: "#b9e6fe",
          200: "#7cd4fd",
          300: "#38bdf8",
          400: "#0ea5e9",
          500: "#0284c7",
          600: "#0369a1",
          700: "#075985",
          800: "#0b4a6f",
          900: "#0f3a58",
          DEFAULT: "#0ea5e9",
        },
        ultrasound: "#06b6d4",
        echo: "#f43f5e",
        ekg: "#f59e0b",
        surface: "#0b1220",
        panel: "#111a2e",
        ink: "#e2e8f0",
      },
      backgroundImage: {
        "soft-gradient":
          "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.16), transparent 35%), radial-gradient(circle at 80% 0%, rgba(244,63,94,0.12), transparent 30%), radial-gradient(circle at 50% 80%, rgba(245,158,11,0.12), transparent 30%), linear-gradient(135deg, #0b1220 0%, #0f172a 60%, #0b1220 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
