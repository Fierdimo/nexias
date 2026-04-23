/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent2)",
        "text-main": "var(--color-text)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        500: "500",
        700: "700",
        800: "800",
      },
      backgroundImage: {
        "grid-blueprint":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(0%2C212%2C255%2C0.04)' stroke-width='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        "blob-float": "blob-float 8s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.96)" },
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 24px rgba(0,212,255,0.25)",
        "glow-cyan-lg": "0 0 48px rgba(0,212,255,0.2)",
        "glow-violet": "0 0 24px rgba(123,94,167,0.25)",
      },
    },
  },
  plugins: [],
};
