import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*{.js,.ts,.jsx,.tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'green'
        }
      },
    },
  },
  plugins: [],
};
export default config;
