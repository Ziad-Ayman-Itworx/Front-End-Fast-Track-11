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
				use: [ 
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { url: false } },
					{ loader: "sass-loader" }
				]
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