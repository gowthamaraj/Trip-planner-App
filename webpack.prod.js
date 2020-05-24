const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: "production",
    entry: "./src/client/index.js",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
      },
      optimization: {
        minimizer: [
          new OptimizeCssAssetsPlugin(),
          new TerserPlugin(),
          new HtmlWebpackPlugin({
            template: "./src/client/view/index.html",
            minify: {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true
            }
          })
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
        new CleanWebpackPlugin(),
        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true
      })
      ],
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader, //3. Extract css into files
              "css-loader", //2. Turns css into commonjs
              "sass-loader" //1. Turns sass into css
            ]
          },
          {
            test: /\.html$/,
            use: ["html-loader"]
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "imgs"
              }
            }
        }
        ]
      }
}