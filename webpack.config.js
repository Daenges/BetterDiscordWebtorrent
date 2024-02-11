const webpack = require("webpack");
const path = require('path');
const pkg = require("./package.json");
const pluginConfig = require("./src/config.json");
pluginConfig.version = pkg.version;

const meta = (() => {
  const lines = ["/**"];
  for (const key in pluginConfig) {
    lines.push(` * @${key} ${pluginConfig[key]}`);
  }
  lines.push(" */");
  return lines.join("\n");
})();

module.exports = {
    mode: "development",
    target: "node",
    devtool: false,
    entry: "./src/main.tsx",
    output: {
      filename: "DiscordWebTorrent.plugin.js",
      path: path.join(__dirname, "dist"),
      libraryTarget: "commonjs2",
      libraryExport: "default",
      compareBeforeEmit: false
    },
    resolve: {
      extensions: [".js", ".css", ".jsx", ".tsx", ".ts"],
    },
    plugins: [
        new webpack.BannerPlugin({raw: true, banner: meta}),
    ],
    module: {
       rules: [
        {test: /\.css$/, use: "raw-loader"}, 
        {test: /\.tsx$/, exclude: /node_modules/, use: {loader: 'babel-loader', options: {presets: ['@babel/env', '@babel/preset-react', '@babel/preset-typescript']}}},
        {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
      ]
    }
  };