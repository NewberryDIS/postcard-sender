import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        paths: {
            // base: '/pose'
            base: '/postcard-sender'
        },
        alias: {
            $css: './src/css',
            $icons: './src/lib/icons',
            $comps: './src/lib/components',
        },
        adapter: adapter()
    }
};

export default config;
