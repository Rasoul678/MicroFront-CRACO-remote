const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  mode: "development",
  output: {
    publicPath: "https://rasoul678.github.io/MicroFront-CRACO-remote/",
  },
  // Adding Server
  devServer: {
    port: 3001,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
