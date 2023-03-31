/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6047EC",

          "secondary": "#28cc8a",

          "accent": "#ba0751",

          "neutral": "#201D2A",

          "base-100": "#fff",

          "info": "#63BAD4",

          "success": "#2BE397",

          "warning": "#ECBA32",

          "error": "#F24A66",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

