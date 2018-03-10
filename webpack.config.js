const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
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
