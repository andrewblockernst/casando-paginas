import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static', // Cambiar de 'server' a 'static'
  integrations: [tailwind()],
  // Remover el adapter de Vercel si existe
});