module.exports = {
  output: {
    library: 'instascan',
    libraryTarget: 'umd',
    filename: 'instascan.js',
    auxiliaryComment: 'Istanscan UMD'
  },
  externals: {
    fs: "fs"
  },
  module: {
    rules: [
      { test: /\.js$/, include: ['src', 'node_modules/instascan'], loader: 'babel-loader' }
    ]
  }
}