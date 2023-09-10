/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const Myclass = plugin(function ({ addUtilities }) {
	addUtilities({
		".my-rotate-y-180": {
			transform: "rotateY(180deg)",
		},
		".preserve-3d": {
			transformStyle: "preserve-3d",
		},
		".perspective": {
			perspective: "1000px",
		},
		".backface-hidden": {
			backfaceVisibility: "hidden",
		},
	});
});

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		darkMode: "class",
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: "100ch", // add required value here
					},
				},
			},
			fontFamily: {
				posts: ["IBM Plex Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), Myclass],
};
