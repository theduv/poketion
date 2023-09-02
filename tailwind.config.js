/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "poke-dark-green": "#B8B42D",
        "poke-light-green": "#697A21",
        "poke-white": "#FFFCE8",
        "poke-black": "#3E363F",
        "poke-red": "#DD403A",
      },
    },
  },
  plugins: [],
};
