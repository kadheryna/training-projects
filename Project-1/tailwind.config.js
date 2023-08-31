/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				background: "#FAFAFA",
				violet: "#7541C8",
				lightViolet: "#B79CE2",
				grayishBlue: "#48556A",
				blackishBlue: "#19212E",
				lightGray: "#CFCFCF",
				lightGrayishBlue: "#ECF2F8",
			},

			backgroundImage: {
				quoteMark: "url('./Images/bg-pattern-quotation.svg')",
			},
		},
	},
	plugins: [],
};
