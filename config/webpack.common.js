const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  performance: {
    hints: false
  },
  entry: {
    main: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            }) ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        },
        include: path.resolve(__dirname, "../src"),
      }
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "management system",
      template: "public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
          { from: path.join(__dirname,'../static'),
            to: '../build/static' }
      ],
    }),
  ],
};
