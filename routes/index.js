var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
	var indexHtml = path.join(__dirname, '/../views/index.html');
	
	res.sendFile(indexHtml);
});
	

module.exports = router;