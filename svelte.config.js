import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        alias: {
            $css: './src/css',
            $icons: './src/lib/icons',
            $comps: './src/lib/components',
        },
        adapter: adapter()
    }
};

export default config;
