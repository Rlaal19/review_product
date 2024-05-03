# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# review_product
สร้างโปรเจ็ค React
1. npm create vite@latest
2. เลือก React+js
3. ตั้งชื่อโปรเจ็ค

ติดตั้ง Tailwind
1. npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

2. ใส่โค้ดข้างล่างลงไฟล์ tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

3. ใส่โค้ดข้างล่างลงไฟล์ index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

ติดตั้ง IconAwesome
1. npm i --save @fortawesome/fontawesome-svg-core

2. npm i --save @fortawesome/free-solid-svg-icons
   npm i --save @fortawesome/free-regular-svg-icons
   npm i --save @fortawesome/free-brands-svg-icons

3. npm i --save @fortawesome/react-fontawesome@latest

back end
- npm i express express-session nodemon mongoose bcrypt cors

front end
- npm i react-router-dom axios
