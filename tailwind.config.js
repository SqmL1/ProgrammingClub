/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
		"./node_modules/flowbite/**/*.js",
		"./node_modules/flowbite/**/*.{js,ts}",
	],
	theme: {
		extend: {
			colors: {
				"header-text": "#006590",
				"header-text-secondary": "#FFFFFF",
				text: "#000000",
				"text-secondary": "#C9C9C9",
				"bg-primary": "#FFFFFFFF",
				"bg-secondary": "#000000",
				"bg-tertiary": "#006590",
				link: "#0194D3",
				"gradient-about": ["#006590", ""],
			},
			fontFamily: {
				heading: "Raleway",
				content: "Open Sans",
				extra: "JetBrains Mono",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
