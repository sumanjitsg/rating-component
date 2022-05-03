const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const { common } = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
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
      filename: 'index.[contenthash].html',
      template: './index.html',
      chunks: [ 'index' ],
    }),
    new HtmlWebpackPlugin({
      filename: 'thankyou.[contenthash].html',
      template: './thankyou.html',
      chunks: [ 'thankyou' ],
    }),
  ],
  devServer: {
    port: 3030,
    compress: true,
  },
});