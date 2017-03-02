const express = require('express')
const app = express()
const serverView = require('./build/serverView');

// app.get('/', function (req, res) {
// 	res.send('Hello World!')
// });

app.use(express.static(__dirname+'/public'));

app.get('*', function (req, res) {

	let html = serverView(req);
	return res.end(html);
});

app.listen(3001, function () {
	console.log('Example app listening on port 3001!')
})