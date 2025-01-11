/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space-grotesk)'],
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
} 