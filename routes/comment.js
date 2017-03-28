var express = require('express'),
		router = express.Router(),
		Comment = require('../models/comment'),
		Blog = require('../models/blog'),
		passport = require('passport');	

// ======== COMMENTS ROUTES ==================
router.get('/blogs/:id/comments/new', function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
			res.redirect('err')
		} else{
			res.render('comments/new', {blog: foundBlog});
		}
	})
})
router.post('/blogs/:id/comments', function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
			res.redirect('err');
		} else{
			Comment.create(req.body.comment, function(err, newComment){
				if(err){
					console.log(err);
					res.redirect('err');
				}else{
					foundBlog.comments.push(newComment);
					foundBlog.save();
					res.redirect("/blogs/"+foundBlog._id);
				}
			})
		}
	})

})

// ERROR ROUTE
router.get("/err", function(req, res){
	res.render("err");
})

module.exports = router;