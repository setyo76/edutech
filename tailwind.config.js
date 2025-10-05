/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-vivid': '#2563EB',
        'orange-energetic': '#F97316',
        'purple-modern': '#8B5CF6',
        'green-fresh': '#10B981',
        'slate-gray': '#334155',
        'light-gray': '#F1F5F9',
        'dark': '#0F172A',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
