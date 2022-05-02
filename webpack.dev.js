const path = require('path');
const { merge } = require('webpack-merge');
const { DIST_PATH, config } = require('./webpack.common');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
});