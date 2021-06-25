const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./.build"),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "./build"),
    open: true,
    hot: true,
    port: 3000,
  },
  devtool: "source-map",
  performance: {
    hints: isProduction ? "warning" : false,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendors",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
            },
          },
        ].filter(Boolean),
      },
      {
        test: /\.(css)$/,
        include: path.resolve("src"),
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve("public/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    isProduction && new CleanWebpackPlugin(),
    isProduction && new MiniCssExtractPlugin(),
    /*  isProduction && new CssMinimizerPlugin(), */
    new HtmlWebpackPlugin({
      title: "Webpack minimal",
      filename: "./index.html",
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
