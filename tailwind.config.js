/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yot-red': '#D62828',
        'yot-red-glow': '#FF3A3A',
        'yot-red-dark': '#8A0F0F',
        'yot-black': '#0A0A0A',
        'yot-dark-grey': '#1A1A1A',
        'yot-mid-grey': '#2A2A2A',
        'yot-light-grey': '#C4C4C4',
        'yot-muted-grey': '#8B8B8B',
      },
      backgroundColor: {
        'gray-850': '#1e2432',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        slow: "pulse 30s infinite",
        slower: "pulse 60s infinite",
      }
    },
  },
  plugins: [],
};
