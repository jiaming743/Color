import path from 'path';

import glob from 'glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const entry = Object.fromEntries(
  glob
    .sync('src/**/*.{ts,tsx}')
    .map((file) => [
      path.relative('src', file.slice(0, file.length - path.extname(file).length)),
      file,
    ])
);

// eslint-disable-next-line
export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry,
      name: 'Color',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: [
        {
          dir: 'es',
          format: 'es',
        },
        {
          dir: 'cjs',
          format: 'cjs',
        },
      ],
    },
  },
  plugins: [
    dts({
      include: ['src'],
      outputDir: 'es',
    }),
  ],
});
