var express = require('express'),
	router = express.Router(),
    //Annotation = require('../models/annotate'),
    passport = require('passport');	

const Annotation = []

// CREATE: STORE ANNOTATIONS
router.post('/annotation/store', (req, res) => {
    //Pass annotations.length to req.body.id
    req.body.id = Annotation.length;
    Annotation.push(req.body)
    //return the id in json format
    res.json({id: req.body.id})
})

// READ: LOAD ANNOTATIONS
router.get('/annotation/annotations', (req, res) => {
    const reqOrigin = req.headers.referer;
    //filter through elements of annotations array and when its uri equals request origin url, we store it to pageAnnotations
    const pageAnnotations = Annotation.filter( (ele) => ele.uri === reqOrigin );
    //return the saved annotation in json format
    res.json(pageAnnotations);
})

// UPDATE: UPDATE ANNOTATIONS
router.put('/annotation/update/:id', (req, res) => {
    //retrieve the updated data from req.body and save it to annotations array with the correct id
    Annotation[req.params.id] = req.body
    //return the updated/saved annotation in json format
    res.json({id: req.body.id})
})

// DESTROY: DELETE ANNOTATIONS
router.delete('/annotation/delete/:id', (req, res) => {
    //retrieve the data from req.body and delete it from the annotation array with the id
    Annotation[req.body.id] = [];
    res.json({id: req.body.id})
})

module.exports = router;