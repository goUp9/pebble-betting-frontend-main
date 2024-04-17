/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '1170': '1170px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#37012B",
        primarybg: "#290120",
      },
      fontFamily: {
        jone: ["Jockey One"],
        chakra: ["Chakra Petch", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        Robo: ['Robofan Free', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        saira: ["Saira", "sans-serif"]
                                                
      },
      backgroundImage: {
        btngrad: "linear-gradient(87.03deg, #1EF1A5 -0.04%, #9746FE 99.96%)",
        tabgrad: "linear-gradient(90deg, #22EAA8 2.04%, #944AFC 100%)",
      },
    },
  },
  plugins: [],
});

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#37012B",
//         primarybg: "#290120",
//       },
//       fontFamily: {
//         jone: ["Jockey One"],
//       },
//       backgroundImage: {
//         btngrad: "linear-gradient(87.03deg, #1EF1A5 -0.04%, #9746FE 99.96%)",
//         tabgrad: "linear-gradient(90deg, #22EAA8 2.04%, #944AFC 100%)",
//       },
//     },
//   },
//   plugins: [],
// }

