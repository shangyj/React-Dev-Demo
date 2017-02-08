'use strict';
var webpack = require('webpack');

module.exports = {
  devtool:'eval-source-map',
  entry:["./src/entry.js"],
  output:{
    path:__dirname + '/build',
    publicPath:'./build/',
    filename:'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel',
      },
    ],
  },
  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 8080,
    process: true,
  },
}
