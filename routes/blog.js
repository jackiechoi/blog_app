var express = require('express'),
		router = express.Router(),
		Blog = require('../models/blog'),
		Comment = require('../models/comment'),
		passport = require('passport');	

// INDEX ROUTE
router.get('/', function(req, res){
	res.redirect('/blogs')
})
// READ ROUTE
router.get('/blogs', function(req, res){
	Blog.find({}, function(err, allBlogs){
		if(err){
			res.redirect('/err');
		}else{
			res.render('blogs/index', {blogs:allBlogs});
		}
	})
})
// ERROR ROUTE
router.get("/err", function(req, res){
	res.render("err");
})
// CREATE ROUTE
router.post('/blogs', function(req, res){
	var newBlog = {title: req.body.title, image: req.body.image, body: req.body.body};
	Blog.create(newBlog, function(err, newlyCreated){
		if(err){
			res.redirect('/err');
		}else{
			res.redirect('/blogs')
		}
	})
})
// NEW FORM
router.get('/blogs/new', function(req, res){
	res.render('blogs/new')
})
// SHOW
router.get('/blogs/:id', function(req, res){
		Blog.findById(req.params.id).populate("comments").exec( 
		function(err, foundBlog){
		if (err) {
			console.log(err);
			res.redirect("/err");
		} else {
			res.render("blogs/show", {blog: foundBlog});
		}	
	});
})	

module.exports = router;