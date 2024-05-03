สร้างโปรเจ็ค React

npm create vite@latest
เลือก React+js
ตั้งชื่อโปรเจ็ค
ติดตั้ง Tailwind

npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p

ใส่โค้ดข้างล่างลงไฟล์ tailwind.config.js /** @type {import('tailwindcss').Config} / export default { content: [ "./index.html", "./src/**/.{js,ts,jsx,tsx}", ], theme: { extend: {}, }, plugins: [], }

ใส่โค้ดข้างล่างลงไฟล์ index.css @tailwind base; @tailwind components; @tailwind utilities;

ติดตั้ง IconAwesome

npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons npm i --save @fortawesome/free-regular-svg-icons npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest

back end
- npm i express express-session nodemon mongoose bcrypt cors

front end
- npm i react-router-dom axios daisyui
