const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, '../dist');
const SRC_PATH = path.resolve(__dirname, '../src');

const common = {
  context: SRC_PATH,
  entry: {
    index: './js/index.js',
    thankyou: './js/thankyou.js',
  },
  output: {
    path: DIST_PATH,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ],
      },
      {
        test: /\.(svg|png)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: [ 'index' ],
    }),
    new HtmlWebpackPlugin({
      filename: 'thankyou.html',
      template: './thankyou.html',
      chunks: [ 'thankyou' ],
    }),
  ],
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    open: {
      app: {
        name: 'chrome',
      },
    },
    hot: true,
    compress: true,
  },
};

module.exports = { common };