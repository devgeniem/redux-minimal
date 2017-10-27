/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  path.join(__dirname, global.appRoot, 'index.jsx'),
];

// export css to a separate file
module.exports.module.rules[1] = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
  }),
};

module.exports.plugins.push(new ExtractTextPlugin({
  filename: 'css/main.css',
}));
