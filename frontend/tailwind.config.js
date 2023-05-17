/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "processus-border": "#00a6fbF0",
        "processus-bg": "#213C4C",
        "ressource-border": "#ef233cF0",
        "ressource-bg": "#49262C",
        "ok-message" : "#28871A",
        "req-message":"#ffb703",
        "bg":"#282829"
    }
    },
  },
  plugins: [],
}