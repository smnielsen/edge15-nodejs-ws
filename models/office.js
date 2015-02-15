// Grab the mongoose module
var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

//Define our Office schema
var officeSchema = new Schema({
	city	: String,
	country	: String
});

// Define our Office model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Office', officeSchema);