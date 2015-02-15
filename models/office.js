// Grab the mongoose module
var mongoose = require('mongoose');
var Schema	 = mongoose.Schema;

//Define our Office schema
var officeSchema = new Schema({
	city	: String,
	country	: String
});
officeSchema.index({ city: 1, country: 1 }, { safe: true, unique: true });
// Define our Office model
// module.exports allows us to pass this to other files when it is called
var Office = mongoose.model('Office', officeSchema);
Office.on('index', function(err) {
	if (err) {
		console.error('Office index error: %s', err);
	} else {
		console.info('Office indexing complete');
	}
});
module.exports = Office;