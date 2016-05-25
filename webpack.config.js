module.exports = {
  entry: './react-redux-for-realz/index.js',
  output: {
    path: './react-redux-for-realz/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'source-map',
};
