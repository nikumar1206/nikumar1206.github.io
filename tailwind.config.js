/** @type {import('tailwindcss').Config} */
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
	plugins: [require("@tailwindcss/typography")],
};
