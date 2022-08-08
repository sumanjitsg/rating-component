const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC_PATH = path.resolve("src");
const DIST_PATH = path.resolve("dist");

const common = {
  context: path.join(SRC_PATH),
  entry: {
    app: "./app.ts",
  },
  output: {
    path: DIST_PATH,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|png)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [SRC_PATH, "node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, "index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: DIST_PATH,
    },
    open: {
      app: {
        name: "chrome",
      },
    },
    hot: true,
    compress: true,
  },
};

module.exports = { common };
