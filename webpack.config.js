var path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  devServer: {},
};
