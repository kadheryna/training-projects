/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
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
