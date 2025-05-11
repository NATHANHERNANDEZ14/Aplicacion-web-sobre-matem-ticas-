/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6',
          dark: '#60A5FA',
        },
        secondary: {
          light: '#8B5CF6',
          dark: '#A78BFA',
        },
        success: {
          light: '#10B981',
          dark: '#34D399',
        },
      },
    },
  },
  plugins: [],
};