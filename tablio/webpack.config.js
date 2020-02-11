var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: {
    index: './src/tablio.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'tablio',
    libraryTarget: 'umd'
  },
  optimization: {
    providedExports: true,
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env'], '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '/../[name].css'
  })],
  externals: {
    react: 'umd react',
    'react-dom': 'umd react-dom'
  }
};