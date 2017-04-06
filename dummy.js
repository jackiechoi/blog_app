var express = require('express'),
		app = express(),
 		http = require('http').Server(app),
		io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('view cache', false);
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://jackiechoi:1111@ds135820.mlab.com:35820/blog_db", function(err, db){
	if(err) throw err;

	io.on('connection', function(socket){
  console.log('A user connected!');
  socket.on('input', function(data){
    console.log('user disconnected :/');
  });
}); 

}); 



app.get("/", function(req, res){
    res.render('dummy');
});


    

http.listen(3000, function(){
  console.log('listening on *:3000');
});
