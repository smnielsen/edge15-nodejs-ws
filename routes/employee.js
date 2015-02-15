var express = require('express');
var router = express.Router();

var Office = require('../models/office');
var Employee = require('../models/employee');

router.get('/', function(req, res, next) {
	Employee.find({}).populate('office').exec(function(err, employees) {
		if (err) return next(err);
		
		res.json(employees)
	})
});

router.post('/', function(req, res, next) {
	var data = req.body;
	console.log(req.body);

	Office.findOne({city: data.office}).exec(function(err, office){
		if (err) return next(err);
	
		var employee = new Employee({ name: data.name, level: data.level, office: office});
		employee.save(function (err, data) {
			if (err) return next(err);

			res.json(employee);
		});
	});
});

router.route('/:id')
	.get(function(req, res, next) {
		var err = new Error();
		err.statusCode = 404;
		err.message = "No get defined yet!";
		next(err);
	})
	.put(function(req, res, next) {
		var err = new Error();
		err.statusCode = 404;
		err.message = "No put defined yet!";
		next(err);
	})
	.delete(function(req, res, next) {
		var err = new Error();
		err.statusCode = 404;
		err.message = "No delete defined yet!";
		next(err);
	});
	

module.exports = router;