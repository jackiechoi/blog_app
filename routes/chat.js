var express = require('express'),
		router = express.Router(),
		server = require('http').createServer(router),
    io = require('socket.io').listen(server),
    passport = require('passport');	

router.get('/chat', function(req, res){
	res.render('chat/index')
})

server.listen(router.get('port'), function(){
	console.log("Express server listening on port " + router.get('port'));
})

io.on('connection', function(socket){
  console.log('A user connected!');
  socket.on('disconnect', function(){
    console.log('user disconnected :/');
  });
});


module.exports = router;