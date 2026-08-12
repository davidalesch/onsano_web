// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onsano.com',
  // German is the unprefixed default at /. Other locales live under /xx/.
  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de', 'fr', 'nl', 'it', 'es'],
    routing: {
      prefixDefaultLocale: false, // DE at /, others at /en/, /fr/, /nl/, /it/, /es/
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
