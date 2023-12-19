/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "header-text": "#006590",
        "header-text-secondary": "#FFFFFF",
        "text": "#000000",
        "text-secondary": "#C9C9C9",
        "bg-primary": "#FFFFFFFF",
        "bg-secondary": "#000000",
        "bg-tertiary": "#006590",
        "link": "#0194D3"
      }
    },
  },
  plugins: [],
}

