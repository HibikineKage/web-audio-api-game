import path from 'path';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    hot: true,
  },
  module :{
    rules: [
      {
        test: /\.css$/,
	use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
	loaders: [
	  'style-loader',
	  {
	    loader: 'css-loader',
	    options: {url: false}
	  },
	  'sass-loader',
	]
      },
      {
        test: /\.jsx?$/,
	exclude: /node/modules/,
	loaders: [
	  'babel-loader'
	],
      }
    ]
  }
};

export default config;
