const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary_color: 'var(--primary_color)',
      secondary_color: 'var(--secondary_color)',
      primary_light_color: 'var(--primary_light_color)',
      primary_dark_color: 'var(--primary_dark_color)',
      white: '#fff',
      gray: 'var(--grey_color)',
      success: colors.emerald[500],
      danger: colors.red[600],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
