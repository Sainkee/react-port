/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'drop-shadow-custom': 'drop-shadow(0 0 0.75rem yellow)',
      },
    },
  },
  plugins: [],
}

