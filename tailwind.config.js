const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        text: {},
        primary: {
          light: colors.gray['50'],
          dark: colors.gray['800'],
        },
        secondary: {
          light: '#F5F5F5',
          dark: '#1F1F1F',
        },
        destructive: {
          light: '#F5F5F5',
          dark: '#1F1F1F',
        },
      },
    },
  },
  plugins: [],
};
