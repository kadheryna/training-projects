/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        work: "url('./images/icon-work.svg')",
        play: "url('./images/icon-play.svg')",
        selfCare: "url('./images/icon-self-care.svg')",
        social: "url('./images/icon-social.svg')",
        study: "url('./images/icon-study.svg')",
        exercise: "url('./images/icon-exercise.svg')",
      },
      colors: {
        bgBody: "hsl(226, 43%, 10%)",
        bgPerson: "hsl(246, 80%, 60%)",
        darkBlue: "hsl(235, 46%, 20%)",
        paleBlue: "hsl(236, 100%, 87%)",
        pastelBlue: "hsl(235, 45%, 61%)",
        darkPastelBlue: "hsl(235, 45%, 33%)",
        lightRedWork: "hsl(15, 100%, 70%)",
        softBlue: "hsl(195, 74%, 62%)",
        lightRedStudy: "hsl(348, 100%, 68%)",
        limeGreen: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        softOrange: "hsl(43, 84%, 65%)",
      },
      fontSize: {
        light: 300,
        medium: 400,
        semibold: 500,
      },
    },
  },
  plugins: [],
};
