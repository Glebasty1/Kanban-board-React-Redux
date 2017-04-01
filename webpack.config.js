var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: ['babel-polyfill', SRC_DIR + "/app/index.jsx"],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
      rules: [
          {
              test: /\.jsx?$/,
              loader: "babel-loader",
              exclude: [/node_modules/, /public/]
          }
      ]
    }
};