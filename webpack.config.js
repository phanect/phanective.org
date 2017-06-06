const path = require("path");

module.exports = {
  entry: "./app/cv.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [ path.resolve(__dirname, "app") ],
        loader: "babel-loader",
        options: {
          presets: [ "latest" ],
          plugins: ["transform-react-jsx"]
        },
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [".js", ".json", ".jsx"],
  }
};
