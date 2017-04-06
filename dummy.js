// // server.js

var express = require('express'),
		app = express(),
 		http = require('http').Server(app),
		io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('view cache', false);
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render('dummy');
});

io.on('connection', function(socket){
  console.log('A user connected!');
  socket.on('disconnect', function(){
    console.log('user disconnected :/');
  });
});
    

http.listen(3000, function(){
  console.log('listening on *:3000');
});
