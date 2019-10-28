// Let's load the default configs:
var defaults = require("./wdio.conf.js").config;
var _ = require("lodash");

var overrides = {
	// Here are all my 'dev' specific overrides:
	baseUrl: "http://dev.atlassian.com",
	mochaOpts: {
		grep: "smoke"
	}
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);