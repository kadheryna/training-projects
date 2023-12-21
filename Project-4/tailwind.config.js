/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				cardBack: "url('./images/bg-card-back.png')",
				cardFront: "url('./images/bg-card-front.png')",
				bgMobile: "url('./images/bg-main-mobile.png')",
				bgDesktop: "url('./images/bg-main-desktop.png')",
			},
			colors: {
				grayishViolet: "hsl(270, 3%, 87%)",
				darkGrayishViolet: "hsl(279, 6%, 55%)",
				lightViolet: "hsl(249, 99%, 64%)",
				mediumViolet: "hsl(278, 94%, 30%)",
				darkViolet: "hsl(278, 68%, 11%)",
				warningRed: "hsl(0, 100%, 66%)",
			},
		},
	},
	plugins: [],
};
