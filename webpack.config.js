var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader!tslint-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    port: 3001,
    historyApiFallback: true
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