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
      primary_color: '#435B9C',
      secondary_color: '#6AA09A',
      primary_color_50: 'rgb(67, 67, 156 / 50%)',
      primary_light_color: '#e3f1ee',
      primary_light_color_80: 'rgba(227, 241, 238, 0.8)',
      primary_dark_color: '#113537',
      white: '#fff',
      gray: colors.trueGray,
      success: colors.emerald[500],
      danger: colors.red[600],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
