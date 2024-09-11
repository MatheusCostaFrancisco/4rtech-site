import colors from "tailwind"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981",
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        blue: {
          DEFAULT: "#3b82f6",
          500: "#3b82f6",
        },
      },
      fontFamily: ["Poppins", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "0rem",
        sm: "0rem",
        lg: "0rem",
        xl: "0rem",
        "2xl": "0rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1170px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}
