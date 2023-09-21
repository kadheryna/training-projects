/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		letterSpacing: {
			widest: "0.2em",
		},

		extend: {
			fontSize: {
				xxs: "0.5em",
				
			},
			fontWeight: {
				regular: "400",
				bold: "700",
				extraBold: "800",
			},
			colors: {
				lightGrey: "hsl(0, 0%, 86%)",
				smokeyGrey: "hsl(0, 1%, 44%)",
				offWhite: "hsl(0, 0%, 94%)",
				offBlack: "hsl(0, 0%, 8%)",
				lightPurple: "hsl(259, 100%, 65%)",
				warningRed: "hsl(0, 100%, 67%)",
			},
			borderRadius: {
				"4xl": "5em",
				"5xl": "6em",
			},
		},
	},
	plugins: [],
};
