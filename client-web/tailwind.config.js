/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // bg
        "bg-dark": "#0f0f1a",
        "bg-dark-alt": "#1a1a2e",

        // Primary (cyan / neon glow)
        primary: "#00ffff",
        "primary-hover": "#00e0e0",
        "primary-active": "#00c8c8",
        "primary-focus": "#00b0b0",
        "primary-border": "rgba(0,255,255,0.3)",

        // Accent
        accent: "#ff007f",
        "accent-hover": "#e60073",
        "accent-active": "#cc0066",

        // Glass / transparent
        glass: "rgba(255, 255, 255, 0.08)",
        "glass-strong": "rgba(255, 255, 255, 0.15)",

        // Text
        "text-base": "#ffffff",
        "text-muted": "#cfcfcf",
      },
      boxShadow: {
        "glow-cyan": "0 8px 25px rgba(0, 255, 255, 0.3)",
        "glass-dark": "0 8px 32px rgba(0,0,0,0.4)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      perspective: {
        1500: "1500px",
      },
      keyframes: {
        blink: {
          "0%, 50%, 100%": { borderColor: "transparent" },
          "25%, 75%": { borderColor: "currentColor" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },

  plugins: [],
};
