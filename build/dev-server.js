const webpack = require("webpack");
const clientConfig = require("./webpack.base.config.js");

module.exports = function setupDevServer(app) {
	const clientCompiler = webpack(clientConfig);
	app.use(
		require("webpack-dev-middleware")(clientCompiler,{
			stats: {
				colors : true
			}
		})
		);
	app.use(require("webpack-hot-middleware")(clientCompiler));
};