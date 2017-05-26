// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
const appRoot = 'src_users'; // the app root folder: src, src_users, etc
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

global.appRoot = appRoot; // the app root folder, needed by the other webpack configs

module.exports = {
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    path.join(__dirname, appRoot, '/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/public/js'),
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      commonStyles: path.resolve(__dirname, appRoot, 'stylesheets/common.scss'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: path.join(__dirname, '/public'),
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
};
