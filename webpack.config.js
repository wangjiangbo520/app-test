const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
	entry: '@/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
	},
	mode: 'development',
	devServer: {
		// port: 3000,
		open: true,
		// hot: true,
		// compress: true,
		proxy: {

		}
	},
	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	presets: ['@babel/preset-env']
					// }
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(scss|sass)$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.less$/i,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			// {
			//  test: /\.(png|jpg|jpeg)$/i,
			//  type: 'asset'
			// }
			{
				test: /\.(png|jpg|jpeg)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						outputPath: 'images',
						name: '[name]_[hash:6].[ext]',
						limit: 5 * 1024,
						esModule: false
					}
				}],
				type: 'javascript/auto'
			},
			{
				test: /\.(html|htm)$/i,
				loader: 'html-withimg-loader' // 处理html中的img标签图片
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html'
		}),
		new CleanWebpackPlugin()
	],
	devtool: 'eval-cheap-module-source-map',
	resolve: {
		alias: {
			'@': path.resolve('src')
		}
	}
}
