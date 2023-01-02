import { defineConfig } from 'vite';

import { ENTRY } from '../config';

// eslint-disable-next-line
export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: ENTRY,
      formats: ['umd'],
      name: 'Color',
    },
    rollupOptions: {
      output: {
        dir: 'umd',
        format: 'umd',
        name: 'Color',
        entryFileNames: 'color.umd.js',
        sourcemap: true,
      },
    },
  },
});
