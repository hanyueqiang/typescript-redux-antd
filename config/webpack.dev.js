const path = require("path");
const webpack = require("webpack");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[local]_[hash:base64:5]",
            },
          },
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'less-loader',
        },
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          { loader: 'postcss-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#1DA57A',
                  'link-color': '#1DA57A',
                  'border-radius-base': '2px'
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    historyApiFallback: true,
    port: 4000,
    hot: true,
  },
});
