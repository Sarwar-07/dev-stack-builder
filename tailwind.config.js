/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5A36',
          pink: '#E025A8',
          violet: '#7A38FE',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF5A36 0%, #E025A8 50%, #7A38FE 100%)',
      }
    },
  },
  plugins: [],
};