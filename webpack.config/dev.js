const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base')
const root = path.resolve(__dirname,'..')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig,{
	entry:[
		'webpack/hot/dev-server',
		path.join(root,'src/index.js')
	],
	devServer: {
		historyApiFallback: true,
		inline: true,
		//progress: true,
		//colors: true,
		port: 3000,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(root,'index.html'),
			inject: 'body'
		})
	]
	//devtool: 'source-map'
})
