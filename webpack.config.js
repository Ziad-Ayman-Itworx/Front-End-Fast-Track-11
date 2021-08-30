const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./index.js",
	output: {
		filename: "main.js"
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [ "style-loader", "css-loader", "sass-loader" ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
};