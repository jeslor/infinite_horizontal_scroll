/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary1': '#a4abe2',
        'slate-500': '#6B7280',
      },
      gridTemplateColumns: {
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
      keyframes: {
        horizontalScrollLeft:{
          to: { transform: 'translate(calc(-50% - 0.5rem))'},
        },
        horizontalScrollRight:{
          to: { transform: 'translate(calc(-50% - 0.5rem))'},
        }
      },
      animation:{
        horizontalScrollLeft:"horizontalScrollLeft 200s linear infinite forwards",
        horizontalScrollRight:"horizontalScrollRight 200s linear infinite reverse",
      }
    },
  },
  plugins: [],
}