import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://benruehl.github.io',
  base: 'astro-flamingo',
  scopedStyleStrategy: 'class',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/main.scss";'
        }
      }
    }
  },
  integrations: [icon()]
});