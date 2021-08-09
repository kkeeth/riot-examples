
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    chunkFilename: 'chunks/[name]/index.[chunkhash].js',
    devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]',
    devtoolFallbackModuleFilenameTemplate: 'source-webpack:///[resourcePath]?[hash]'
  },
  resolve: {
    alias: {
      path: require.resolve("path-browserify")
    },
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    inline: true,
    stats: 'errors-only',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      }
    ]
  }
}
