const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  page_template: path.join(__dirname, '/app/templates/index.html')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node.js
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  devtool: 'inline-source-map',
  entry: {
    app: ["babel-polyfill", PATHS.app]
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
    module: {
        loaders: [
			       { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
		  ]
    },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Workout Logger App',// use <%= htmlWebpackPlugin.options.title %> to inject this in page template
      template: PATHS.page_template
    }),
    new webpack.HotModuleReplacementPlugin() //auto refresh app in browser after file save but state is not loss, requires react-hmre
  ]
};
