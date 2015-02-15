var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
	res.send('Hello beautiful Netlighter!');
});

app.listen(1337, function() {
	console.log('Unicorn running on port: 1337');
});

