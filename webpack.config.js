var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './lib/index.tsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   loader: 'babel',
      //   query: {
      //     presets: ['es2015', 'stage-0', 'react']
      //   }
      // },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React',
      devServer: 'http://localhost:3001',
      appMountId: 'app'
    })
  ]
}