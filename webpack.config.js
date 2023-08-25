const path = require('node:path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src', 'index.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    optimization: {
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
                { test: /\.ts?$/, use: 'babel-loader', exclude: /node_modules/, }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
    }