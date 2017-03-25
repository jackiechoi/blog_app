var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		Blog = require('./models/blog'),
		Comment = require('./models/comment'),
		Blog = require('./models/blog'),
		Comment = require('./models/comment');
		//seedDB = require('./seeds');

var connectionString = mongoose.connect("mongodb://jackiechoi:1111@ds135820.mlab.com:35820/blog_db"); 
//mongoose.connect("mongodb://localhost/medium_app");
app.set('view engine', 'ejs')
app.set('view cache', false);
//seedDB();

// Body parser for forms
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//__dirname is the directory this script lives in
app.use(express.static(__dirname + "/public"))

//INDEX ROUTE
app.get('/', function(req, res){
	res.redirect('/blogs')
})
app.get('/blogs', function(req, res){
	Blog.find({}, function(err, allBlogs){
		if(err){
			res.redirect('/err');
		}else{
			res.render('blogs/index', {blogs:allBlogs});
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
// NEW 
app.get('/blogs/new', function(req, res){
	res.render('blogs/new')
})
// SHOW
app.get('/blogs/:id', function(req, res){
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

// ======== COMMENTS ROUTES ==================
app.get('/blogs/:id/comments/new', function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			console.log(err);
			res.redirect('err')
		} else{
			res.render('comments/new', {blog: foundBlog});
		}
	})
	
})
app.post('/blogs/:id/comments', function(req, res){
	//lookup blog using id, create new comment, connect new comment to blog
	//redirect blog show page
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

app.listen(process.env.PORT || '3001', function(){
	console.log('Medium app working!')
})