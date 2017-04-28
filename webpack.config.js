// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = 'src_users'; // the app root folder: src, src_users, etc
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

global.app_root = app_root; // the app root folder, needed by the other webpack configs

module.exports = {
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: __dirname + '/public/js',
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
      }
    ],
  },
  resolve: {
    alias: {
      commonStyles: path.resolve(__dirname,  app_root + '/stylesheets/common.scss')
    }
  },
  devServer: {
    contentBase: __dirname + '/public',
  },
  plugins: [
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
};
