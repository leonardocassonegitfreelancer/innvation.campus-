import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  output: 'server',
  adapter: isDev ? undefined : cloudflare({
    entrypointResolution: 'auto',
    imageService: 'passthrough',
  }),
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
        ...(process.env.NODE_ENV === 'production' ? { 'react-dom/server': 'react-dom/server.edge' } : {}),
      },
    },
    ssr: {
      resolve: {
        conditions: ['workerd', 'worker', 'browser'],
        externalConditions: ['workerd', 'worker', 'browser'],
      },
    },
    optimizeDeps: {
      include: [
        'react', 'react-dom', 'react/jsx-runtime',
        'lucide-react',
        'clsx', 'class-variance-authority', 'tailwind-merge',
        '@radix-ui/react-accordion', '@radix-ui/react-alert-dialog',
        '@radix-ui/react-aspect-ratio', '@radix-ui/react-avatar',
        '@radix-ui/react-checkbox', '@radix-ui/react-collapsible',
        '@radix-ui/react-context-menu', '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu', '@radix-ui/react-hover-card',
        '@radix-ui/react-label', '@radix-ui/react-menubar',
        '@radix-ui/react-navigation-menu', '@radix-ui/react-popover',
        '@radix-ui/react-progress', '@radix-ui/react-radio-group',
        '@radix-ui/react-scroll-area', '@radix-ui/react-select',
        '@radix-ui/react-separator', '@radix-ui/react-slider',
        '@radix-ui/react-slot', '@radix-ui/react-switch',
        '@radix-ui/react-tabs', '@radix-ui/react-toast',
        '@radix-ui/react-toggle', '@radix-ui/react-toggle-group',
        '@radix-ui/react-tooltip',
        'framer-motion', 'embla-carousel-react',
        'react-hook-form', 'react-day-picker', 'react-resizable-panels',
        'date-fns', 'cmdk', 'input-otp', 'next-themes',
        'recharts', 'sonner', 'vaul',
      ],
    },
  },
});
