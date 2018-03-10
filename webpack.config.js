const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: '[name].bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Modern Frontend Boilerplate'
		})
	]
};
