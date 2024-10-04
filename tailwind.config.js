/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
          "xm" : "450px",
      },

      keyframes:{
        blink : {
          "0%" : {
            "opacity": "0",
          },
          "100%" : {
            "opacity" : "1",
          }
        }
      },

      animation: {
        "blink" : "blink .5s infinite alternate",
      }
    },
  },
  plugins: [],
}

