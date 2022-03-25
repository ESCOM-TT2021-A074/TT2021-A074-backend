const path = require("path");

module.exports = {
	target: "node",
	mode: "development",
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.bundle.js",
	},
	externals: ["pg", "sqlite3", "tedious", "pg-hstore"],
};
