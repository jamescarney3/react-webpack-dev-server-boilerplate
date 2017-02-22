const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    html: './index.html',
    javascript: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [

      // usual asset loaders with react hot module replacement
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // required for linter
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        },
      },

      // required for bootstrap
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  eslint: {
    configFile: './.eslintrc.json',
  },
  devtool: 'source-map',
};
