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
        "banner-h1-2k": ["10.5rem", "1.1em"],
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
      /** lg:bg-gray-500 xl:bg-yellow-500 2xl:bg-green-500 2k:bg-blue-500 4k:bg-red-500
       * lg: gray
       * xl: yellow
       * 2xl: green
       * 2k: blue
       * 4k: red
       * */
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px", // 720p
        xl: "1280px", // 720p 5:4
        "2xl": "1536px", //1080p
        "2k": "2560px",
        "4k": "3840px",
      },
      height: {
        "2k": "1440px",
      },
      objectPosition: {
        poutine: "-50px 30px",
      },
    },
  },
  plugins: [],
};