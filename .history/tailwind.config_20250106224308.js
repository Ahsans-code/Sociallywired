/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        customHover:'linear-gradient(to bottom , #fff500, #9c4ffe);'
      }
    },
  },
  plugins: [],
};
