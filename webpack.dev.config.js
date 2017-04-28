var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');    // inherit from the main config file

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/' + global.app_root + '/index.js'
];

// export css to a separate file
module.exports.module.rules[1] = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
  }),
};

module.exports.plugins.push(
  new ExtractTextPlugin({
    filename: '../css/main.css',
  })
);
