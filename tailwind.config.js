/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {},
		screens: {
			sm: '414px',
			md: '812px',
			lg: '1205px',
			xl: '1904px',
			ct_sm: '320px',
			ct_md: '757px',
			ct_lg: '1240px',
			ct_xl: '1904px',
		},
	},
	plugins: [],
};
