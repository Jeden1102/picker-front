import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "rgb(245, 76, 122)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            secondary: {
              foreground: "#fff",
              DEFAULT: "#F54C7A",
            },
          },
        },
        dark: {
          colors: {
            secondary: "#F54C7A",
          },
        },
      },
    }),
  ],
};
