/**
 * Created by sini on 15-02-15.
 */


var express = require('express'),
	router = express.Router();

var Office = require('../models/office');

router.route('/')
	.get(function(req, res, next) {
		Office.find({}).exec(function(err, offices) {
			if(err) {
				return next(err);
			}
			res.json(offices);
		});
	})
	.post(function(req, res, next) {
		var data = req.body;
		if(!data || !data.city || !data.country) {
			console.log('Missing required fields: ', data);
			var err = new Error(500);
			err.message('Missing required fields: ');
			err.data = data;
			return next(err);
		}
		var office = new Office({
			city: data.city,
			country: data.country
		});
		office.save(function(err) {
			if(err) {
				console.log('Could not save Office: ', err);
				return next(err);
			}
			res.json(office);
		});
	});

router.route('/:city')
	.get(function(req, res, next) {
		var city = req.params.city;
		Office.find({ city: city }).exec(function(err, offices) {
			if(err) {
				return next(err);
			}
			res.json(offices);
		});
	})
	.post(function(req, res, next) {
		var err = new Error();
		err.statusCode = 500;
		err.message = 'No post defined';
		next(err);
	})
	.put(function(req, res, next) {
		var err = new Error();
		err.statusCode = 500;
		err.message = 'No put defined';
		next(err);
	})
	.delete(function(req, res, next) {
		var city = req.params.city;
		Office.remove({ city: city }).exec(function(err) {
			if(err) {
				return next(err);
			}
			res.status(203).json({
				status: 203,
				message: 'Removed city: ' + city
			})
		});
	});

module.exports = router;