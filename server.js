var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		Blog = require('./models/blog'),
		Comment = require('./models/comment'),
		seedDB = require('./seeds');

seedDB();
// Set view engine folder
mongoose.connect("mongodb://localhost/medium_app");
app.set('view engine', 'ejs')
app.set('view cache', false);

// Body parser for forms
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/public", express.static("public"))

//INDEX ROUTE
app.get('/', function(req, res){
	res.render('landing')
})
app.get('/blogs', function(req, res){
	Blog.find({}, function(err, allBlogs){
		if(err){
			res.redirect('/err');
		}else{
			res.render('index', {blogs:allBlogs});
		}
	})
})
// ERROR ROUTE
app.get("/err", function(req, res){
	res.render("err");
})
// CREATE ROUTE
app.post('/blogs', function(req, res){
	var title = req.body.title;
	var image = req.body.image;
	var body = req.body.body;
	var newBlog = {title: title, image: image, body: body}
	Blog.create(newBlog, function(err, newlyCreated){
		if(err){
			res.redirect('/err');
		}else{
			res.redirect('/blogs')
		}
	})
})
// NEW - show form to create new blog
app.get('/blogs/new', function(req, res){
	res.render('new')
})
// SHOW
app.get('/blogs/:id', function(req, res){
		Blog.findById(req.params.id, function(err, foundBlog){
		if (err) {
			console.log(err);
			res.redirect("/err");
		} else {
			res.render("show", {blog: foundBlog});
		}	
	});
})	


app.listen(3001, function(){
	console.log('Medium app working!')
})