import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    sourcemap: true,
    rollupOptions: {
      input: 'src/ts/scripts.ts',
      output: {
        entryFileNames: '[name].min.js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
        quietDeps: true,
      },
    },
  },
  plugins: [
    scss({
      name: "styles.min.css",
      sourceMap: true,
      outputStyle: 'compressed',
      processor: () => require('postcss')([
        autoprefixer()
      ]),
    }),
  ],
});
