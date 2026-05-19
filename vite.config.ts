import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import * as sass from 'sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

const scssPath = resolve(process.cwd(), 'src/scss/styles.scss');

// Cache SCSS dependencies so they stay watched even after compile errors
const scssFiles = new Set<string>();

export default defineConfig({
  root: '.',
  cacheDir: '.vite_cache',
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: false,

    rollupOptions: {
      input: {
        scripts: resolve(__dirname, 'src/ts/scripts.ts'),
      },
      output: {
        entryFileNames: 'scripts.min.js',
        chunkFileNames: '[name].min.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.match(/\.(png|jpe?g|svg|gif|webp|avif)$/)) {
            return 'images/[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        },
      },
    },

    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: false,

    // Polling required for watch mode on network drives
    watch: {
      usePolling: true,
    },
  },
  
  // CSS configuration
  css: {
    preprocessorOptions: {
      scss: {
        // Silence SCSS deprecation warnings
        silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
      },
    },
    postcss: {
      plugins: [
        autoprefixer(), // Autoprefixer for vendor prefixes
      ],
    },
  },
  
  // Resolve configuration
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css'],
  },
  
  // Plugins
  plugins: [
    {
      name: 'compile-scss-to-css',
      buildStart() {
        // Register main SCSS file + all cached dependencies
        this.addWatchFile(scssPath);
        scssFiles.forEach((file) => this.addWatchFile(file));
      },
      async generateBundle() {
        // Compile SCSS to CSS
        const result = sass.compile(scssPath, {
          sourceMap: true,
          style: 'compressed',
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        });

        // Cache all imported SCSS files so they stay watched even after compile errors
        result.loadedUrls.forEach((url) => {
          if (url.protocol === 'file:') {
            const filePath = fileURLToPath(url);
            scssFiles.add(filePath);
            this.addWatchFile(filePath);
          }
        });

        // Apply PostCSS (Autoprefixer)
        const postcssResult = await postcss([autoprefixer()]).process(result.css, {
          from: scssPath,
          to: 'styles.min.css',
          map: {
            inline: false,
            annotation: true,
            prev: result.sourceMap ? JSON.stringify(result.sourceMap) : false,
          },
        });

        // Add CSS file to bundle
        this.emitFile({
          type: 'asset',
          fileName: 'styles.min.css',
          source: postcssResult.css,
        });

        // Add source map
        if (postcssResult.map) {
          this.emitFile({
            type: 'asset',
            fileName: 'styles.min.css.map',
            source: postcssResult.map.toString(),
          });
        }
      },
    },
  ],
});
