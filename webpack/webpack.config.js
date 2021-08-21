// storybook specific configuration
// some how storybook is still using webpack@1.*, come on!
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "components/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      type: "umd",
    },
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"],
      },

      {
        test: /\.(png|gif)$/i,
        type: "asset/inline",
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: "[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/common.css",
    }),
  ],
};
