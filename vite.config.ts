import { defineConfig } from 'vite';
import { resolve } from 'path';
import * as sass from 'sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default defineConfig({
  // Root directory for the build
  root: '.',
  
  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    
    // Enable source maps for both JS and CSS
    sourcemap: true,
    
    // Empty output directory before build
    emptyOutDir: false,
    
    // Rollup options
    rollupOptions: {
      // Entry point for TypeScript only
      input: {
        scripts: resolve(__dirname, 'src/ts/scripts.ts'),
      },
      output: {
        // Configure output file names
        entryFileNames: 'scripts.min.js',
        chunkFileNames: '[name].min.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'styles.min.css';
          }
          if (assetInfo.name?.match(/\.(png|jpe?g|svg|gif|webp|avif)$/)) {
            return 'images/[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        },
      },
    },
    
    // Enable minification
    minify: 'esbuild',
    
    // Target browsers
    target: 'es2020',
    
    // Disable CSS code split
    cssCodeSplit: false,
    
    // Cache directory
    cacheDir: '.vite_cache',
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
  
  // Development server settings
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
    },
  },
  
  // Plugins
  plugins: [
    {
      name: 'compile-scss-to-css',
      async generateBundle(options, bundle) {
        // Compile SCSS file directly
        const scssPath = resolve(__dirname, 'src/scss/styles.scss');
        
        try {
          // Compile SCSS to CSS
          const result = sass.compile(scssPath, {
            sourceMap: true,
            style: 'compressed',
            silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
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
          
          console.log('✓ CSS compiled successfully');
        } catch (error) {
          console.error('Error compiling SCSS:', error);
          throw error;
        }
      },
    },
    {
      name: 'progress-plugin',
      buildStart() {
        console.log('\nBuilding...');
      },
      buildEnd() {
        console.log('✓ Build complete\n');
      },
    },
  ],
  
  // Optimization
  optimizeDeps: {
    include: ['typescript'],
  },
});
