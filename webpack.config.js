var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

// Get our environment and config for build.
var env = process.env.NODE_ENV || 'development'
var isProduction = env == 'production'
if (isProduction && !process.env.OSD_CREW_BUILD_CONFIG) throw new Error('Must set environment variable OSD_CREW_BUILD_CONFIG')
var buildConfigPath = process.env.OSD_CREW_BUILD_CONFIG || './dev-build-config.json'
var buildConfig = require(buildConfigPath)

if (
  !buildConfig.apiEndpoint ||
  !buildConfig.assetsEndpoint ||
  !buildConfig.publicEndpoint
) throw new Error ('Build config must include apiEndpoint, assetsEndpoint, and publicEndpoint')

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
    }),
    new webpack.DefinePlugin({
      // We "bake in" the endpoints, etc. (because how would we even know where to find the api to ask where the other endpoints are?)
      'process.env': {
        'NODE_ENV': stringWrap(env),
        'API_ENDPOINT': stringWrap(buildConfig.apiEndpoint),
        'PUBLIC_ENDPOINT': stringWrap(buildConfig.publicEndpoint),
        'ASSETS_ENDPOINT': stringWrap(buildConfig.assetsEndpoint),
        'INCLUDE_LOGS': !!buildConfig.includeLogs
      }
    })
  ]
}

function stringWrap(val) {
  return "'"+val+"'"
}