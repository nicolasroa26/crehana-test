/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#CBE4EA',
          blush: '#EAD1CB',
          taupe: '#AF9C98',
          slate: '#657275',
          black: '#000000',
        },
      },
    },
  },
  plugins: [],
};
