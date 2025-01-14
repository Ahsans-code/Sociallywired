/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#fff500',
        customPurple: '#9c4ffe',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #fff500, #9c4ffe)',
        
      },
      boxShadow:{"box-shadow-mobile":" inset 0px -13px 400px 100px #1a1a19",
        "box-shadow-desktop":"rgb(26, 26, 25) 0px -100px 180px inset, rgb(26, 26, 25) 0px 300px 130px inset;"
      }
    },
  },
  plugins: [],
};
