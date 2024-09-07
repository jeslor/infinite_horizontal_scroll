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
        horizontalScroll:{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation:{
        horizontalScroll:"horizontalScroll 80s linear infinite"
      }
    },
  },
  plugins: [],
}