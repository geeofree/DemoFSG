const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Webpack = require('webpack')
const path = require('path')

const ExtractCSS = new ExtractTextPlugin('style.css')
const WebpackHMR = new Webpack.HotModuleReplacementPlugin()

const DevPath  = path.join(__dirname, 'dev')
const ProdPath = path.join(__dirname, 'prod')

module.exports = {
	entry: DevPath,
	output: {
		path: ProdPath,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s(a|c)ss/,
				use: ExtractCSS.extract(['css-loader', 'postcss-loader', 'sass-loader'])
			}
		]
	},
	devServer: {
		hot: true,
		port: 3000,
		compress: true,
		contentBase: DevPath,
		historyApiFallback: true
	},
	plugins: [
		ExtractCSS,
		WebpackHMR
	]
}
