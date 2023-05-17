/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "processus-border": "#00a6fbF0",
        "processus-bg": "#00a6fb2a",
        "ressource-border": "#ef233cF0",
        "ressource-bg": "#ef233c2a",
        "ok-message" : "#29bf12F0",
        "req-message":"#ffb703F0",
        "bg":"#282829"
    }
    },
  },
  plugins: [],
}