const BundleTracker = require('webpack-bundle-tracker')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

const common = require('./webpack.common.js')


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new BundleTracker({
      filename: './config/webpack-stats.json'
    }),
    new CleanWebpackPlugin(),
    // removes a lot of debugging code in React
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // keeps hashes consistent between compilations
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('dist'),
    publicPath: '/static/'
  }
})