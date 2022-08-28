var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        include : SRC_DIR,
        use: {
          loader: 'babel-loader',
        }
        // query: {
        //   presets: ['react', 'es2015']
      //  }
      }
    ]
  }
};