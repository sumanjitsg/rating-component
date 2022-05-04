const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const { common } = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ],
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
    port: 3000,
  },
});