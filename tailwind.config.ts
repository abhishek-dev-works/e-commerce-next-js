import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        platinum: {
          DEFAULT: '#DEDFE3',
          100: '#292b30',
          200: '#535561',
          300: '#7d8190',
          400: '#adb0ba',
          500: '#dedfe3',
          600: '#e5e5e8',
          700: '#ebecee',
          800: '#f2f2f4',
          900: '#f8f9f9',
        },
        cadet_gray: {
          DEFAULT: '#9CA0A9',
          100: '#1e2023',
          200: '#3d3f46',
          300: '#5b5f69',
          400: '#7a7f8b',
          500: '#9ca0a9',
          600: '#b0b4bb',
          700: '#c4c6cc',
          800: '#d8d9dd',
          900: '#ebecee',
        },
        almond: {
          DEFAULT: '#E7DBCD',
          100: '#3b2c1c',
          200: '#755938',
          300: '#ae8556',
          400: '#caaf91',
          500: '#e7dbcd',
          600: '#ebe1d6',
          700: '#f0e9e0',
          800: '#f5f0ea',
          900: '#faf8f5',
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config