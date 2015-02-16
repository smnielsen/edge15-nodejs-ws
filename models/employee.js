// Grab the mongoose module
var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

//Define our Employee schema
var employeeSchema = new Schema({
	username: String,
	name	: String,
	level	: String,
	office	: { type: Schema.Types.ObjectId, ref: "Office" }
});


// Define our Employee model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Employee', employeeSchema);