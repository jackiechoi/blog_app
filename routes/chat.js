var express = require('express'),
		router = express.Router(),
		server = require('http').createServer(app),
    io = require('socket.io')(server),
		
    passport = require('passport');

router.get('/chat', function(req, res){
	res.render('chat/index')
})


io.on('connection', function(socket){
  console.log('A user connected!');
  socket.on('disconnect', function(){
    console.log('user disconnected :/');
  });
});


module.exports = router;

