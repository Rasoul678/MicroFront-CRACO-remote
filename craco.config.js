const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
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
