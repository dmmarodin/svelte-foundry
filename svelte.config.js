import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/svelte-foundry' : '',
		}
	}
};

export default config;
