module.exports = {
	devServer: {
		contentBase: "./public",
		hot: true
	},
	entry: './build/index',
	output: {
		filename: 'public/bundle.js'
	}
};