/**
 * Created by sini on 15-02-15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('Hello beautiful Netlighter!');
});

module.exports = router;