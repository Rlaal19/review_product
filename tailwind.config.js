/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#7E9AE6",
        primarycontent: "#73DCE6",
        primarysubtitle: "#FFF7FC",
        primarybase: "#E6A4B4",
        primarybotton: "#DAFFFB",
        primarybg: "#FFF0F5",
      }
    },
  },
  plugins: [],
}

