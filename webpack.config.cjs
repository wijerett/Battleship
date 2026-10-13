
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');




module.exports = {
  mode: "development",
  entry: "./src/driver.js",
  output: {
    filename: "driver.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/404.html', to: '404.html' }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: "asset/resource",
      },
    ],
  },
};
