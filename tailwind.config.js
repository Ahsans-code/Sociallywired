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
      boxShadow:{"box-shadow-mobile":" inset 0px -13px 350px 100px rgba(0,0,0,1)",
        "box-shadow-desktop":"inset 0 -50px 50px #1a1a19, inset 0 200px 120px #1a1a19"
      }
    },
  },
  plugins: [],
};
