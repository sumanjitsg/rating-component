const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');

const common = {
  context: SRC_PATH,
  entry: {
    index: {
      import: './js/index.js',
    },
    thankyou: {
      import: './js/thankyou.js',
    },
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
  },
};

module.exports = { common };