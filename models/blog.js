var mongoose = require('mongoose');
		
//SCHEMA SETUP
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
})
module.exports = mongoose.model("Blog", blogSchema);