const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const SRC_DIR = path.resolve(__dirname, 'src');
const EXAMPLES_DIR = path.resolve(SRC_DIR, 'examples');
const DIST_DIR = path.resolve(__dirname, 'docs');

const generateHtml = new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.resolve(EXAMPLES_DIR, 'index.html'),
	inject: false
});
const extractSass = new ExtractTextPlugin({
	filename: 'app.css'
});

const configs = {
	entry: path.resolve(EXAMPLES_DIR, 'app.js'),
	output: {
		path: DIST_DIR,
		filename: 'app.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				include: SRC_DIR,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
				//include: SRC_DIR,
				use: extractSass.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		generateHtml,
		extractSass
	],
	devServer: {
		contentBase: EXAMPLES_DIR,
		port: 8080
	}
};

module.exports = configs;
