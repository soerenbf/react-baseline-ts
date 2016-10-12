var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    
    output: {
        path: "./dist",
        filename: "bundle.js",
    },

    plugins: [
        new ExtractTextPlugin('app.css')
    ],
});