/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			comissioner: ["Commissioner", "sans-serif"],
		},
		fontWeight: {
			thin: 400,
			normal: 500,
			bold: 700,
		},
		extend: {
			backgroundImage: {
				bgMobile: "url('../styles/images/image-hero-mobile.jpg')",
				bgDesktop: "url('../styles/images/image-hero-desktop.jpg')",
			},
			colors: {
				darkGray: "hsl(0, 0%, 48%)",
				darkCyan: "hsl(176, 72%, 28%)",
				moderateCyan: "hsl(176, 50%, 47%)",
			},
		},
	},
	plugins: [],
};
