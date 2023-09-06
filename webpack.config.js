const path = require('path');
const ts_config_webpack_path = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: 'production',
	target:'node',
	entry: {
		main:path.resolve(__dirname, 'src', 'index.ts'),
	},
	output: {
		clean:true,
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
	},
	optimization: {
		usedExports:true,
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	module: {
		rules: [
			{ test: /\.ts?$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	},
	resolve: {
		extensions: ['.ts', '.js'],
		plugins:[
			new ts_config_webpack_path()
		]
	},
};
