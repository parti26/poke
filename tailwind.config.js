/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        'poke-full': 'url(assets/mousePointer/icon-full.png), pointer',
        'poke-empty': 'url(assets/mousePointer/icon-empty.png), pointer'
      }
    },
  },
  plugins: [require("daisyui")],
};
