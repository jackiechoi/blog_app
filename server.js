var express = require('express'),
		app = express(),
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		methodOverride = require('method-override'),
		bodyParser = require('body-parser'),
		passport = require('passport'),
		LocalStratey = require('passport-local'),
		passportLocalMongoose = require('passport-local-mongoose');

// REQUIRE ROUTES
var commentRoutes = require('./routes/comment'),
		blogRoutes = require('./routes/blog');
		annotateRoutes = require('./routes/annotate');

// APP CONFIG
var connectionString = mongoose.connect("mongodb://jackiechoi:1111@ds135820.mlab.com:35820/blog_db"); 
//mongoose.connect("mongodb://localhost/medium_app");
app.set('view engine', 'ejs')
app.set('view cache', false);
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))

// PASSPORT CONFIG
app.use(require('express-session')({
	secret: "this is secret!", //used to encode and decode sessions.
	resave: false,
	saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
/*
//setting up middleware called authenticate
passport.use(new LocalStratey(User.authenticate())); 

//built-in authentication methods
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
//creating my own middleware: passing currentUser: req.user to every single handler by calling this function for every route
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
})
app.use(commentRoutes);
app.use(blogRoutes);
app.use(annotateRoutes);


app.listen(process.env.PORT || '3001', function(){
	console.log('Medium app working!')
})