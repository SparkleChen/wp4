var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        home: "./src/index.js"
    },
    output: {
        filename: "[name].[chunkhash:8].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/react']
                    }
                }
            },
            {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [ 'css-loader' ]
            })
            },
            {
                test: /img/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            publicPath:'../'
                        }
                    }
                ]
            }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename:'css/[name].[chunkhash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                commons: {
                    test:/[\\/]omponent[\\/]/,
                    name: "commons",
                    chunks: "all",
                    minSize: 1,
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        })
    ]
};