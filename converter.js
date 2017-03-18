const jss  = require('./jss-config');
const { SheetsRegistry } = require('jss');
const { styles } = require('./build/Button');

const sheet = jss.createStyleSheet(styles);
sheet.attached = true;
const sheets = new SheetsRegistry();
sheets.add(sheet);
console.log(sheets.toString());