const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');

const config = {
  context: SRC_PATH,
  entry: {
    index: './js/index.js',
    thankyou: './js/thankyou.js',
  },
  output: {
    path: DIST_PATH,
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: [ 'index' ],
    }),
    new HtmlWebpackPlugin({
      filename: 'thankyou.html',
      template: './thankyou.html',
      chunks: [ 'thankyou' ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './favicon-32x32.png'
        }
      ]
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          path: 'favicon-32x32.png',
          attributes: {
            rel: 'icon',
          }
        }
      ],
    }),
  ]
};

module.exports = { DIST_PATH, config };