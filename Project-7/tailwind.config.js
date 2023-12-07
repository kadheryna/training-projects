/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      spaceMono: ["Space Mono", "monospace"],
    },
    letterSpacing: {
      widest: "0.25em",
    },
    extend: {
      backgroundImage: {
        dollar: "url('../styles/images/icon-dollar.svg')",
        person: "url('../styles/images/icon-person.svg')",
      },
      colors: {
        main: "hsl(185, 41%, 84%)",
        secondary: "hsl(189, 41%, 97%)",
        darkGreen: "hsl(183, 100%, 15%)",
        lightGreen: "hsl(172, 67%, 45%)",
        input: "hsl(185, 41%, 94%)",
        warning: "hsla(21, 100%, 50%)",
        buttonActive: "hsl(172, 67%, 55%)",
        grayish: "hsl(186, 14%, 43%)",
        lightGray: "hsl(186, 14%, 63%)",
      },
    },
  },
  plugins: [],
};
