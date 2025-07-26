/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender-light': '#F1EAFF',
        'lavender': '#E5D4FF',
        'purple-light': '#DCBFFF',
        'purple': '#D0A2F7',
      }
    },
  },
  plugins: [],
};
