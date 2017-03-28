var express = require('express'),
		router = express.Router(),
		Comment = require('../models/comment'),
		Blog = require('../models/blog'),
		passport = require('passport');	

 router.post('/like', function (req, res) {
    Comment.findById(req.body.commentId, function(err, foundComment){
    	if(err){
    		console.log(err);
    	}else{
    		foundComment.likes += 1;
    		foundComment.save();
    		//console.log("foundComment.likes: ",foundComment.likes)
    	}
    })
 });


module.exports = router;