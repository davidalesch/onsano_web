// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onsano.com',
  // English default at /. Other locales live under /xx/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'nl', 'it', 'es'],
    routing: {
      prefixDefaultLocale: false, // EN at /, others at /de/, /fr/, /nl/, /it/, /es/
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
