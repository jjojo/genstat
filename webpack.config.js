const path                      = require('path');
const CommonsChunkPlugin        = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin         = require('copy-webpack-plugin');
const ContextReplacementPlugin  = require('webpack/lib/ContextReplacementPlugin');
const jeet = require('jeet');

module.exports = {
  entry: {
    'main'  : './src/main.ts',
    'vendor': './src/vendor.ts'
  },
  output: {
    path    : './dist',
    filename: 'bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    new CopyWebpackPlugin([{from: './src/index.html', to: 'index.html'}]),
    new ContextReplacementPlugin( /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/),
  ],
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts-loader'},
      {test: /\.styl$/, loader: 'css-loader!stylus-loader'},
      {test: /\.css$/, loader: 'css-loader'},
      {test: /\.html$/, loader: 'html'},
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.svg$/, loader: 'svg-loader' }
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  stylus: {
    use: [jeet()]
  },
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  },
  devtool: 'source-map'
};