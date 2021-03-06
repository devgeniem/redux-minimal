/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = require('./webpack.config.js');

module.exports.devtool = 'source-map';

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  path.join(__dirname, global.appRoot, 'index.jsx'),
];

// production env
module.exports.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));

// compress the js file
module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
  sourceMap: true,
  comments: false,
  compressor: {
    warnings: false,
  },
}));

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
