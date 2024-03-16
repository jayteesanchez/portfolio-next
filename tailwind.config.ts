import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2.00',
        '250': '2.50'
      },
      height: {
        '80svh': 'height: 80svh;'
      }
    },
  },
  plugins: [],
};
export default config;
