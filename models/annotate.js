var mongoose = require('mongoose');
		
//SCHEMA SETUP
var annotateSchema = new mongoose.Schema({
	ranges: mongoose.Schema.Types.Mixed,
	quote: String,
	text: String,
	uri: String
});

module.exports = mongoose.model("Annotation", annotateSchema);
