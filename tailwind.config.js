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
          navy: '#0B132B',
          dark: '#080d1f',
          blue: '#2563EB',
          red: '#DC2626',
        }
      }
    },
  },
  plugins: [],
}
