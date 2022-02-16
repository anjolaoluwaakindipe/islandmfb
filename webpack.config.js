const webpack = require("@nativescript/webpack");
const {} = require("@nativescript/webpack")


module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	return webpack.resolveConfig({
    // target: new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "app/images/**",
    //       noErrorOnMissing: true,
    //       globOptions: { dot: false, ...copyIgnore },
    //     },
    //   ],
    // }),
  });
};


