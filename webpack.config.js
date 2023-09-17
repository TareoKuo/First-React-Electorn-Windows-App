const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/main/main.ts"],
  target: "node",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "fs": false // 如果不需要 fs，可以将其设为 false
    }
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }]
  },
  plugins: [new webpack.ExternalsPlugin("commonjs", ["leveldown"])]
};