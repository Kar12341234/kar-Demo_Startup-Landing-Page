import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        cloud: "#F8FAFC",
        lavender: "#F1EAFE",
        iris: "#6D5DFB",
        skybolt: "#2F80ED"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(35, 43, 92, 0.12)",
        glow: "0 20px 70px rgba(109, 93, 251, 0.26)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 18% 18%, rgba(109, 93, 251, 0.22), transparent 30%), radial-gradient(circle at 78% 10%, rgba(47, 128, 237, 0.18), transparent 28%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)"
      }
    }
  },
  plugins: []
};

export default config;
