const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      ErrorPicker: path.resolve(__dirname, "src/ErrorPicker"),
      Firebase: path.resolve(__dirname, "src/firebase"),
      Contexts: path.resolve(__dirname, "src/contexts"),
      Components: path.resolve(__dirname, "src/components"),
      Constants: path.resolve(__dirname, "src/constants"),
      Helpers: path.resolve(__dirname, "src/helpers"),
      Hooks: path.resolve(__dirname, "src/hooks"),
      Asset: path.resolve(__dirname, "src/assets"),
      Theme: path.resolve(__dirname, "src/theme"),
    },
    extensions: [".js", ".jsx", "..."],
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "dev") },
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 6400,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new Dotenv(),
  ],
};
