module.exports = {
  entry: './asset/src/common/js/app.js',
  output: {
    filename: './public/common/js/build.js'
  },
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
    ]
  },
  resolve: {
    extensions:['*', '.js', '.tag']
  }
}