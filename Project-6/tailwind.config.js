/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      darkMode: "class",
      colors: {
        // Primary
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youTube: "hsl(348, 97%, 39%)",

        // Dark theme
        darkBackground: "hsl(230, 17%, 14%)",
        veryDarkBlue: "hsl(232, 19%, 15%)",
        darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        desaturatedBlue: "hsl(228, 34%, 66%)",
        activeBlue: "hsl(228, 24%, 37%)",
        // Light theme
        veryPaleBlue: "hsl(225, 100%, 98%)",
        grayishBlue: "hsl(232, 33%, 91%)",
        lightGrayishBlue: "hsl(227, 47%, 96%)",
        darkGrayishBlue: "hsl(228, 12%, 34%)",
        darkBlue: "hsl(230, 17%, 14%)",
      },
      letterSpacing: {
        widest: "0.4em",
      },
      fontSize: {
        medium: 400,
        bold: 700,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
