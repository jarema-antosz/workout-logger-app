const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
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
    app: PATHS.app
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
      title: 'Workout Logger App',
      template: __dirname + '/app/templates/index.html'
    }),
    new webpack.NoErrorsPlugin()
  ]
};
