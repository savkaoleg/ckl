const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    bundle: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js']
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.resolve('build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    publicPath: 'http://localhost:8080/',
    quiet: false,
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
