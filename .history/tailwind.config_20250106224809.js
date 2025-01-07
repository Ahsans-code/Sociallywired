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
    },
  },
  plugins: [],
};
