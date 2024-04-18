/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [ "valentine",
      {
        mytheme: {
        
          "primary": "#7A43F5",
                  
          "secondary": "#00b800",
                  
          "accent": "#717100",
                  
          "neutral": "#212c25",
                  
          "base-100": "#fcfcfc",
                  
          "info": "#00a3d4",
                  
          "success": "#81ae00",
                  
          "warning": "#d4af00",
                  
          "primarybg": "#ff7087",

          "star": "#ff7087",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}