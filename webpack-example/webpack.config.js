const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');
const node_modules = path.resolve(__dirname, 'node_modules');
const bootstrap = path.resolve(node_modules, 'bootstrap/dist/css/bootstrap.css');
const font_awesome = path.resolve(node_modules, 'font-awesome/css/font-awesome.css');

module.exports = {
  entry: {
    index: ['./public/src/App.js', './public/src/style/index.css'],
    vendors: ['react', 'react-dom', bootstrap, font_awesome]
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js|jsx$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'url?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=10000&name=images/[name].[ext]'
      }
    ]
  },
  devtool: "#cheap-source-map",
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ]
};