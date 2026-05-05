import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  srcDir: './astro',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'react-router-dom': fileURLToPath(new URL('./src/lib/router-shim.tsx', import.meta.url)),
      },
    },
  },
});
