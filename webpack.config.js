'use strict';
var webpack = require('webpack');

module.exports = {
  devtool:'eval-source-map',
  entry:['webpack/hot/dev-server',__dirname + '/src/entry.js'],
  output:{
    path:__dirname + '/build',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热模块替换插件
  ],
  devServer: {
    contentBase: './build',
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 8080,
    process: true,
  },
}
