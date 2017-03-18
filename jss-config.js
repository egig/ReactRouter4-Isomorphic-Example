const { create } = require('jss');
const preset = require('jss-preset-default').default;
const crypto = require('crypto');
const version = require('./package.json').version
const nested = require('jss-nested').default;

const jss = create({
	generateClassName: (stylesStr, rule, sheet) => {

		return `${rule.name || 'jss'}-`+crypto.createHash('md5').update(version).digest("hex");
	},
	plugins: [nested()]
});

module.exports = jss;

