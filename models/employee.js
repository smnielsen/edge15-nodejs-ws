// Grab the mongoose module
var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

//Define our Employee schema
var employeeSchema = new Schema({
	name	: String,
	level	: String,
	office	: { type: mongoose.Schema.Types.ObjectId, ref: "Office" }
});


// Define our Employee model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Employee', employeeSchema);