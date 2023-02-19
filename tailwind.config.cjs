/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{html,ts,tsx}', './src/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        border: '0px 1px 6px 7px rgba(0,0,0,0.38)',
      },
    },
  },
  plugins: [],
}
