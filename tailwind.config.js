/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        tomato: '#ff6257',
        darkSlateGrey: '#242742',
        charcoalGrey: '#36384e',
        grey: '#9294a0',
      },
      listStyleImage:{
        store:'url("/assets/images/icon-list.svg")'
      }
    },
  },
  plugins: [],
}
