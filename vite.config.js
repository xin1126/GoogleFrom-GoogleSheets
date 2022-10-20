import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

const path = require('path');

export default defineConfig({
  plugins: [
    vue(), ViteComponents(
      {
        dirs: ['src/components', 'src/views'],
      },
    ),
  ],
  base: './',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
});
