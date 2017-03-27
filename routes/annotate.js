var express = require('express'),
	router = express.Router();
	//Blog = require('../models/blog'),
	//Comment = require('../models/comment'),
	//annotator = require('annotator'),
    //passport = require('passport');	

const annotations = []

// CREATE: STORE ANNOTATIONS
router.post('/annotation/store', (req, res) => {
    //Pass annotations.length to req.body.id
    req.body.id = annotations.length;
    annotations.push(req.body)
    //return the id in json format
    res.json({id: req.body.id})
})

// READ: LOAD ANNOTATIONS
router.get('/annotation/annotations', (req, res) => {
    const reqOrigin = req.headers.referer;
    //filter through elements of annotations array and when its uri equals request origin url, we store it to pageAnnotations
    const pageAnnotations = annotations.filter( (ele) => ele.uri === reqOrigin );
    //return the saved annotation in json format
    res.json(pageAnnotations);
})

// UPDATE: UPDATE ANNOTATIONS
router.put('/annotation/update/:id', (req, res) => {
    //retrieve the updated data from req.body and save it to annotations array with the correct id
    annotations[req.params.id] = req.body
    //return the updated/saved annotation in json format
    res.json({id: req.body.id})
})

// DESTROY: DELETE ANNOTATIONS
router.delete('/annotation/delete/:id', (req, res) => {
    //res.redirect('/annotation/annotations');
    res.send('delete path working!')
})

module.exports = router;