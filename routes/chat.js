var express = require('express'),
		router = express.Router(),
		passport = require('passport');	

// INDEX ROUTE
router.get('/chat', function(req, res){
	res.render('chat/index')
})

module.exports = router;