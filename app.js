/*
	Edge Academy 2015
	Introduction to NodeJs and MongoDB
	Authors: Simon Nielsen, Albin Carnstam

 */


var express = require('express');
var app = express();

var compression 		= require('compression'),
	bodyParser 			= require('body-parser'),
	morgan 				= require('morgan');

var routes = require('./routes/index');

/* App Configuration
   ============================== */
// to get app logging for development
app.use(morgan('dev'));

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

// compress all requests
app.use(compression());

// Set variables
app.set('port', process.env.PORT || 1337);

/* App Routes
 ============================== */
app.use('/', routes);

app.listen(app.get('port'), function() {
	console.log('Unicorn running on port: ' + app.get('port'));
});

