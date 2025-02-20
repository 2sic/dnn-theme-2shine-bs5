import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcss from 'rollup-plugin-postcss'; // Importiere das PostCSS-Plugin

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Aktiviert Sourcemaps
    emptyOutDir: false,
    rollupOptions: {
      input: {
        scripts: 'src/ts/scripts.ts',
        styles: 'src/scss/styles.scss', // SCSS als separaten Input definieren
      },
      output: {
        entryFileNames: '[name].min.js',
        assetFileNames: '[name].min.[ext]',
      },
      plugins: [
        postcss({
          extract: 'styles.min.css',   // Extrahiert CSS in eine separate Datei
          minimize: true,               // Minifiziert das CSS (optional)
          sourceMap: true,              // Aktiviert Sourcemaps
          plugins: [
            autoprefixer(),             // Fügt Browser-Prefixes hinzu
            cssnano({                  // Minifiziert CSS
              preset: 'default',
            }),
          ],
        }),
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,  // Unterdrückt SCSS-Warnungen
      },
    },
  },
});
