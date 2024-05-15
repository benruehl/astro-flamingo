import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    scopedStyleStrategy: 'class',
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/styles/main.scss";',
                },
            },
        },
    },
});
