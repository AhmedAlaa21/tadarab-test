import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkWhite: "#F8F8F8",
        white: "#FFFFFF",
        black: "#000000",
        lightBlack: "#222222",
        normalGray: "#707070",
        darkGray: "#777777",
        lightGray: "#888888",
        green: "#198754",
        red: "#AF151F",
        lightRed: "#C15258",
        lightYellow: "#FEF0CC",
        purple: "#7B2CBF",
      },
    },
  },
  plugins: [],
};
export default config;
