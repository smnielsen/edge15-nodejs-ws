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

router.delete('/', function(req, res, next) {
	//Clear out old data
	Employee.remove({}, function(err) {
		if (err) {
			console.error('LikeModel: error deleting old data.');
		} else {
			console.info('LikeModel: success deleting old data');
		}
		Employee.find({}, function(err, result) {
			res.json(result);
		});
	});
});

router.post('/', function(req, res, next) {
	var data = req.body;
	
	if(!data || !data.name || !data.level || !data.username || !data.office) {
		console.log('Missing required fields: ', data);
		var err = new Error(500);
		err.message('Missing required fields (name, level, username, office): ');
		err.data = data;
		return next(err);
	}

	Office.findOne({city: data.office}).exec(function(err, office){
		if (err) return next(err);
		
		var username =  data.name.split(' ')[0][0] +
						data.name.split(' ')[0][1] +
						data.name.split(' ')[1][0] +
						data.name.split(' ')[1][1];

		var employee = new Employee({ username: username.toLowerCase(), name: data.name, level: data.level, office: office});

		employee.save(function (err, data) {
			if (err) return next(err);

			res.json(employee);
		});
	});
});

var updateEmployee = function(username, data) {
	Employee.update(
		{ username: username },
		{ $set: data}).exec(function(err, employee) {
			if (err) return next(err);

			res.json(employee);
		});
};

router.route('/:username')
	.get(function(req, res, next) {
		Employee.findOne({ username: req.params.username }).populate('office').exec(function(err, employee) {
			if (err) return next(err);
			
			res.json(employee);
		});
	})
	.put(function(req, res, next) {
		var data = req.body;

		if(!data || !data.name || !data.level) {
			console.log('Missing required fields: ', data);
			var err = new Error(500);
			err.message('Missing required fields (name, level): ');
			err.data = data;
			return next(err);
		}

		var setters = { name: data.name, level: data.level };
		if (data.office) {
			Office.findOne({city: data.office}).exec(function(err, office){
				if (err) return next(err);

				setters['office'] =  office._id;
				updateEmployee(req.params.username, setters);
			});
		} 
		else {
			updateEmployee(req.params.username, setters);
		}
	})
	.delete(function(req, res, next) {
		Employee.remove({ username: req.params.username }).populate('office').exec(function(err, employee) {
			if (err) return next(err);
			
			res.json(employee);
		});
	});
	

module.exports = router;