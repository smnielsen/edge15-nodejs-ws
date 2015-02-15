/*
	Edge Academy 2015
	Introduction to NodeJs and MongoDB
	Authors: Simon Nielsen, Albin Carnstam

 */


var express = require('express');
var app = express();

var compression 		= require('compression'),
	bodyParser 			= require('body-parser'),
	morgan 				= require('morgan'),
	mongoose = require('mongoose');

/* Routes sources */
var routes = require('./routes/index');
var employee = require('./routes/employee');
var office = require('./routes/office');

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
app.set('mongodb-url', 'mongodb://localhost:27017/netlight');

/* Mongoose Connection
 ============================== */
mongoose.set('debug', true);
mongoose.connect(app.get('mongodb-url'));

/* App Routes
 ============================== */
app.use('/', routes);
app.use('/employee', employee);
app.use('/office', office);

/* PUT IN EXAMPLE! Error Handler
 ============================== */
app.use(function(err, req, res, next) {
	res.status(err.statusCode || 500).json(err);
});

app.listen(app.get('port'), function() {
	console.log('Unicorn running on port: ' + app.get('port'));
});

