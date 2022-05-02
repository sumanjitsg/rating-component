const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
});

// new CopyPlugin({
//   patterns: [
//     // {
//     //   from: './css',
//     //   to: 'css',
//     // },
//     // {
//     //   from: './assets',
//     //   to: 'assets',
//     // },
//     {
//       from: './favicon-32x32.png'
//     }
//   ]
// }),

// new HtmlWebpackTagsPlugin({
//   links: [
//     // {
//     //   path: 'css',
//     //   glob: '*.css',
//     //   globPath: './src/css/',
//     // },
//     {
//       path: 'favicon-32x32.png',
//       attributes: {
//         rel: 'icon',
//       }
//     }
//   ],
// }),;