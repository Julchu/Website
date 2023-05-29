/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      padding: {
        // Left
        "left-sm": "2rem",
        "left-md": "4rem",
        "left-lg": "6rem",
        "left-xl": "",
        "left-2xl": "",
        "left-2k": "",

        // Top
        "top-sm": "1rem",
        "top-md": "3rem",
        "top-lg": "",
        "top-xl": "",
        "top-2xl": "",
        "top-2k": "",
      },
    },
  },
  plugins: [],
};
// pl-32 pt-20