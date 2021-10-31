const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: process.env.ENV || 'development',
	devtool: 'inline-source-map',
	entry: './src/sass/main.scss',
	output: {
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: '[id].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'My app',
		}),
	],
	devServer: {
		watchFiles: {
			paths: ['src/*.html', 'public/**/*'],
		},
	},
};
