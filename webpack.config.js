const path = require('path');

module.exports = {
	devtool: "source-map",
	entry: path.resolve(__dirname, 'src/main/js/index.js'),
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'src/main/resources/static/js'),
		filename: 'bundle.js',
	},
};