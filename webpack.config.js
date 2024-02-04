const path = require('path');

module.exports = {
    mode: "development",
    target: "node",
    devtool: false,
    entry: "./src/index.js",
    output: {
      filename: "DiscordWebTorrent.plugin.js",
      path: path.join(__dirname, "dist"),
      libraryTarget: "commonjs2",
      libraryExport: "default",
      compareBeforeEmit: false
    },
    resolve: {
      extensions: [".js"],
    },
  };