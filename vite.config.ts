import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom'
	},
	base: process.env.NODE_ENV === 'production' ? '/svelte-foundry' : '/',
	build: {
		outDir: 'build',
		assetsDir: '_app/immutable/assets'
	}
});
