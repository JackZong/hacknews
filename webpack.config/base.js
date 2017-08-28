const path = require('path')
const root = path.resolve(__dirname,'..')

module.exports = {
	entry: path.join(root,'src/main.js'),
	output: {
		path: path.join(root,'src/main.js'),
		filename: 'main.js'
	},
	resolve: {
		alias: {
			components: path.join(root,'src/components'),
			views: path.join(root,'src/views'),
			store: path.join(root,'src/store'),
			'vue$': 'vue/dist/vue.common.js'
		},
		extensions: ['.js','.vue'],
	//	fallback: [path.join(root,'node_modules')]
	},
/*	resolveLoader: {
		fallback: [path.join(root,'node_modules')]
	},*/
	module: {
		loaders: [
			{test: /\.vue$/,loader: 'vue-loader'},
			{test: /\.js$/,loader: 'babel-loader',exclude: /node_modules/}
		]
	}
}