const deps = require("./package.json").dependencies;

module.exports = {
  name: "remote",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./Remote": "./src/Remote.jsx",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
