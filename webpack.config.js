const path = require('path');

module.exports = {
	devtool: "source-map",
	entry: path.resolve(__dirname, 'src/main/frontend/main.js'),
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
			{
				test: /\.js$/i,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'src/main/resources/static/js'),
		filename: 'bundle.js',
	},
};