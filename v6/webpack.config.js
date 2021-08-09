const { resolve } = require('path')
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    chunkFilename: 'chunks/[name]/index.[chunkhash].js',
    devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]',
    devtoolFallbackModuleFilenameTemplate: 'source-webpack:///[resourcePath]?[hash]'
  },
  resolve: {
    alias: {
      path: require.resolve("path-browserify")
    },
    extensions: ['.ts', '.js', '.riot']
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      //maxSize: 0,
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
        loader: 'ts-loader',
        options: {
          transpileOnly: isDevelopment,
          appendTsSuffixTo: [/\.riot$/]
        }
      },
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      },
      {
        test: /\.ts$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: isDevelopment
          }
        }]
      }
    ]
  }
}
