/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				firstBg: "#3a4764",
				firstButtonsCol: "#eae3dc",
				fScreenCol: "#182034",
				bgButtons: "#232c43",
				backgroundCol: "#F5F5F5",
			},
			fontFamily: {
				league: ["League Spartan", "sans-serif"],
			},
		},
	},
	plugins: [],
};
