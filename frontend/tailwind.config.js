/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/routes/value-elicitation.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "custom-salmon": "#FEA691",
        "custom-blue": "#8AB0FE"
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

