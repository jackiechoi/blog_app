var express = require('express'),
		app = express(),
		port = process.env.PORT || 3001,
		bodyParser = require('body-parser'),
		mongoose = require('mongoose'),
		methodOverride = require('method-override'),
		bodyParser = require('body-parser'),
		passport = require('passport'),
		LocalStratey = require('passport-local'),
		cookieParser = require('cookie-parser'),
		// server = require('http').createServer(app),
  //   io = require('socket.io')(server),
		passportLocalMongoose = require('passport-local-mongoose');

// REQUIRE ROUTES
var commentRoutes = require('./routes/comment'),
		blogRoutes = require('./routes/blog'),
		annotateRoutes = require('./routes/annotate'),
		likeRoutes = require('./routes/like');
		//chatRoutes = require('./routes/chat')(io);

// APP CONFIG
var connectionString = mongoose.connect("mongodb://jackiechoi:1111@ds135820.mlab.com:35820/blog_db"); 
//mongoose.connect("mongodb://localhost/medium_app");
app.set('view engine', 'ejs')
app.set('view cache', false);
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"))
app.use(cookieParser())

// PASSPORT CONFIG
app.use(require('express-session')({
	secret: "this is secret!", //used to encode and decode sessions.
	resave: false,
	saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//creating my own middleware: passing currentUser: req.user to every single handler by calling this function for every route
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
})

app.use(commentRoutes);
app.use(blogRoutes);
app.use(annotateRoutes);
app.use(likeRoutes);
//app.use(chatRoutes);

app.listen(port, function(){
	console.log('Blog app working!')
})