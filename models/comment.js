var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
	text: String,
	author: String,
	image: String,
	likes: {type: Number, default: 0},
	date: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Comment", commentSchema);