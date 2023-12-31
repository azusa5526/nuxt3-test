import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // https://github.com/vbenjs/vite-plugin-svg-icons
import path from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	typescript: {
		shim: false,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['~/assets/css/main.css'],
	modules: ['@pinia/nuxt', '@nuxt/content'],
	nitro: {
		plugins: ['~/server/database.ts'],
	},
	runtimeConfig: {
		apiSecret: {
			MONGO_URL: process.env.MONGO_URL,
		},
	},
	pinia: {
		autoImports: [
			// automatically imports `defineStore`
			'defineStore', // import { defineStore } from 'pinia'
			['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
		],
	},
	vite: {
		plugins: [
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), 'assets/svg-icon')],
				symbolId: 'icon-[dir]-[name]',
				inject: 'body-last',
				customDomId: '__svg__icons__dom__',
			}),
		],
	},

	content: {
		sources: {
			product: {
				driver: 'fs',
				prefix: '/prod',
				base: path.resolve(__dirname, 'public/upload/contents/product'),
			},
		},
		respectPathCase: true,
		ignores: ['\\.jpg', '\\.png'],
	},
});
