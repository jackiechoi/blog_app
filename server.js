var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose');

// Set view engine folder
mongoose.connect("mongodb://localhost/medium_app");
app.set('view engine', 'ejs')
app.set('view cache', false);

//SCHEMA SETUP
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String
})
var Blog = mongoose.model("Blog", blogSchema);

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
			res.render('err')
		}else{
			res.render('blogs', {blogs:allBlogs});
		}
	})
})
// CREATE ROUTE
app.post('/blogs', function(req, res){
	var title = req.body.name;
	var image = req.body.image;
	var body = req.body.body;
	var newBlog = {title: title, image: image, body: body}
	Blog.create(newBlog, function(err, newlyCreated){
			if(err){
			res.render('err')
		}else{
			res.redirect('/blogs')
		}
	})
})
// NEW - show form to create new blog
app.get('/blogs/new', function(req, res){
	res.render('new')
})

app.listen(3001, function(){
	console.log('Medium app working!')
})