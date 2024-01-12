/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        beige: {
          50: "#faf7f2",
          100: "#f3eee1",
          200: "#e6dcc2",
          300: "#d5c49c",
          400: "#c8ad7e",
          500: "#b79158",
          600: "#aa7d4c",
          700: "#8d6541",
          800: "#72523a",
          850: "#543c2a",
          900: "#5d4431",
          950: "#130d09",
        },
      },
    },
    screens: {
      movile: { max: "600px" },
    },
  },
  plugins: [],
};
