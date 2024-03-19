import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// let basePath = null !== process.env.BUILD_PATH ? import.meta.env.BUILD_PATH : '/postcard-sender'
let basePath = process.env.BUILD_PATH
console.log(basePath)
// let vercelDeployment = false
// let basePath = vercelDeployment ? '/' : '/postcard-sender'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        paths: {
            // base: '/pose'
            base: basePath,
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
