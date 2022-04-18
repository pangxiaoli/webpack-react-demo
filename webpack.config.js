/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "APP.js"),
	output: {
		path: path.join(__dirname, "dist"),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: path.join(__dirname, "src"),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "index.html"),
			filename: "index.html"
		})
	],
	devServer: {
		port: 3000,
		open: true,
		static: path.join(__dirname, "dist"),
	}
};
