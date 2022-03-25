require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_TABLE,
		host: process.env.DB_HOST,
		dialect: process.env.DBM,
		logging: false,
	},
	test: {
		username: process.env.DB_USER_TEST,
		password: process.env.DB_PASS_TEST,
		database: process.env.DB_TABLE_TEST,
		host: process.env.DB_HOST_TEST,
		dialect: process.env.DBM,
		logging: false,
	},
	production: {
		username: process.env.DB_USER_PRODUCTION,
		password: process.env.DB_PASS_PRODUCTION,
		database: process.env.DB_TABLE_PRODUCTION,
		host: process.env.DB_HOST_PRODUCTION,
		dialect: process.env.DBM,
		logging: false,
	},
};
