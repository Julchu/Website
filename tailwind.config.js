/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "banner-h1": ["6.5cqw", "6.5cqw"],
        "banner-h3": ["2cqw", "2cqw"],
        "heading-h1": ["4cqw", "4cqw"],
        list: "",
      },
      dropShadow: {
        sideImage: "0px 3px 6px rgba(0,0,0,0.9)",
      },
      keyframes: {
        fadeInAnimation: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      },
      animation: {
        fadeIn: "fadeInAnimation 1s ease-out forwards",
      },
      screens: {
        "2k": "2560px",
        "4k": "3840px",
      },
      height: {
        "2k": "1440px",
      },
    },
  },
  plugins: [],
};