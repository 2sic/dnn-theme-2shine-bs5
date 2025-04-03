import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styler";
import path from 'path';
import terser from "@rollup/plugin-terser";

export default {
  input: "src/ts/scripts.ts",
  output: {
    file: "dist/scripts.min.js",
    format: "iife",
    sourcemap: true,
    assetFileNames: "styles.min.css",
  },
  plugins: [
    typescript(),
    styles({
      mode: "extract",
      minimize: true,
      outputStyle: "compressed",
      sourceMap: true
    }),
    terser(),
    {
      name: "log-files",
      generateBundle(_, bundle) {
        Object.keys(bundle).forEach((fileName) => {
          console.log(`✅ Datei erstellt: dist/${fileName}`);
        });
      },
    },
  ],
};
