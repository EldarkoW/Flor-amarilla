import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://EldarkoW.github.io',
  base: '/para-mi-Shuyana-hermosa-preciosa'
});
