// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Raleway: { wght: [400, 600, 700] },
					"Open Sans": { wght: [400, 600, 700] },
					"JetBrains Mono": { wght: [400, 600, 700] },
				},
				useStylesheet: true,
			},
		],
	],
	ssr: false,
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "DevC2 | Anoka-Ramsey Programming Club",
			meta: [
				{
					property: "og:title",
					content: "DevC2 | The Anoka-Ramsey Programming Club",
				},
				{
					property: "og:icon",
					content: "/DevC2.svg",
				},
				{
					property: "description",
					content: "The Anoka-Ramsey Community College Programming Club",
				},
				{
					property: "icon",
					content: "/DevC2.svg",
				},
				{
					property: "og:image",
					content: "./DevC2.svg",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "/favicon.ico",
				},
			],
		},
	},
});
