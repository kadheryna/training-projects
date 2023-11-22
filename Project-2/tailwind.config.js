/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["League Spartan', sans-serif"],
		},
		extend: {
			colors: {
				firstBackground: "hsl(222, 26%, 31%)",
				firstScreen: "hsl(224, 36%, 15%)",
				firstButtons: "hsl(30, 25%, 90%)",
				firstButtonsActive: "hsl(30, 25%, 99%)",
				firstButtonsShadow: "hsl(28, 16%, 65%)",
				firstButtonsBackground: "hsl(223, 31%, 20%)",
				firstEqual: "hsl(6, 63%, 50%)",
				firstEqualActive: "hsl(6, 63%, 65%)",
				firstEqualShadow: "hsl(6, 70%, 34%)",
				firstClear: "hsl(225, 21%, 49%)",
				firstClearActive: "hsl(224, 28%, 35%)",
				firstClearShadow: "hsl(224, 28%, 55%)",

				/////
				secondBackground: "hsl(0, 0%, 90%)",
				secondScreen: "hsl(0, 0%, 93%)",
				secondButtonsBackground: "hsl(0, 5%, 81%)",
				secondButtons: "hsl(45, 7%, 89%)",
				secondEqual: "hsl(25, 98%, 40%)",
				secondClear: "hsl(185, 42%, 37%)",
				secondClearShadow: "hsl(185, 58%, 45%)",
				secondClearShadow: "hsl(185, 58%, 25%)",
				//////
				thirdBackground: "hsl(268, 75%, 9%)",
				thirdScreen: "hsl(268, 71%, 12%)",
				thirdButtonsBackground: "hsl(268, 71%, 12%)",
				thirdButtons: "hsl(290, 70%, 16%)",
				thirdButtonsActive: "hsl(290, 70%, 46%)",
				thirdButtonsShadow: "hsl(290, 70%, 26%)",
				thirdEqual: "hsl(176, 100%, 44%)",
				thirdEqualActive: "hsl(176, 100%, 64%)",
				thirdEqualShadow: "hsl(176, 100%, 24%)",
				thirdClear: "hsl(285, 91%, 42%)",
				thirdClearActive: "hsl(268, 47%, 50%)",
				thirdClearShadow: "hsl(290, 70%, 26%)",
				thirdClearText: "hsl(0, 0%, 100%)",

				thirdText: "hsl(52, 100%, 62%)",
			},
		},
	},
	plugins: [],
};
