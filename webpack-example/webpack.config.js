const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const node_modules = path.resolve(__dirname, 'node_modules');
const bootstrap = path.resolve(node_modules, 'bootstrap/dist/css/bootstrap.css');
const font_awesome = path.resolve(node_modules, 'font-awesome/css/font-awesome.css');
const animate = path.resolve(node_modules, 'animate.css/animate.min.css');

module.exports = {
  entry: {
    index: ['./public/src/index.js'],
    vendors: ['react', 'react-dom', animate, bootstrap, font_awesome]
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

  plugins: [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendor.bundle.js")
  ]
};