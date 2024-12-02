const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = () => {
  let lastMessage = '';

  return {
    mode: "development",
    entry: ['./src/scss/styles.scss', './src/ts/scripts.ts'],
    output: {
      filename: 'scripts.min.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[hash][ext][query]'
    },
    devtool: 'source-map',
    watch: true,
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.temp_cache'),
      compression: 'gzip',
    },
    resolve: {
      extensions: ['.ts', '.js', '.scss']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.min.css',
      }),
      new webpack.ProgressPlugin((percentage, message) => {
        const progress = Math.round(percentage * 100);
        const progressBar = `[${'='.repeat(progress / 2)}${' '.repeat(50 - progress / 2)}]`;
        if (message !== lastMessage) {
          console.log(`${progress}% ${progressBar} ${message}`);
          lastMessage = message;
        }
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false, // Blocks the build on type errors
        typescript: {
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        },
      }),      
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },  
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader', // Babel for transformations
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-typescript',
                ],
                plugins: [
                  '@babel/plugin-transform-class-properties',
                  '@babel/plugin-transform-object-rest-spread',
                ],
              }
            },
            {
              loader: 'ts-loader', // Type-checking
              options: {
                transpileOnly: true, // Skip type-checking; separate type-checker recommended
              },
            },
          ],
          exclude: /node_modules/,
        }, 
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              },
            }, 
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                postcssOptions: {
                  plugins: function () {
                    return [
                      require('autoprefixer'),
                      require('cssnano')({
                        preset: 'default',
                      }),
                    ];
                  }
                }
              }
            }, 
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
                }
              },
            }
          ],
          exclude: /node_modules/,
        }
      ],
    },
  };
};
