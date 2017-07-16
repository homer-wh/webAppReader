var path = require('path');

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: './node_modules/'
			}, {
				test: /\.html$/,
				loader: 'html-loader'
			}

		]
	}
}