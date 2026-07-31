// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://onsano.com',
  // Bilingual site, English default. German lives under /de/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false, // EN at /, DE at /de/
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
