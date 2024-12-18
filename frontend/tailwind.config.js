/** @type {import('tailwindcss').Config} */
import {theme} from "./src/theme.tsx"

export default {
  content: [
    "./src/routes/value-elicitation.tsx"
  ],
  theme: {
    extend: {
      colors: {
        "custom-salmon": "#FEA691",
        "custom-blue": "#8AB0FE",
        "": "",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

