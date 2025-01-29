/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: '#733b8f',
        second: '#5b56af',
        third:"#0eadee"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(115,59,143,1) 34%, rgba(91,86,175,1) 45%, rgba(14,173,238,1) 64%)',
        'custom-gradient-br': 'linear-gradient(135deg, rgba(115,59,143,1) 34%, rgba(91,86,175,1) 45%, rgba(14,173,238,1) 64%)',
        'custom-gradient-tr': 'linear-gradient(45deg, rgba(115,59,143,1) 34%, rgba(91,86,175,1) 45%, rgba(14,173,238,1) 64%)'
        
      },
      boxShadow:{"box-shadow-mobile":" inset 0px -13px 400px 100px #1a1a19",
        "box-shadow-desktop":"rgb(26, 26, 25) 0px -100px 180px inset, rgb(26, 26, 25) 0px 300px 130px inset;"
      }
    },
  },
  plugins: [],
};
