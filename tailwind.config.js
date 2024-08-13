/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
