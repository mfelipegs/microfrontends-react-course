const HtmlWebpackPLugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: { "./ProductsIndex": "./src/index" },
    }),
    new HtmlWebpackPLugin({ template: "./public/index.html" }),
  ],
};