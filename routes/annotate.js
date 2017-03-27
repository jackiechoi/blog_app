var express = require('express'),
	  router = express.Router(),
    Annotation = require('../models/annotate'),
    passport = require('passport');	


// CREATE: STORE ANNOTATIONS
router.post('/annotation/store', (req, res) => {
  //retrieve annotation from req.body and save it as createdAnnt
  Annotation.create(req.body, function(err, createdAnnt){
    if(err) return console.log(err);
    //if no error, assign the createdAnnt's mongoose._id as id
    res.json({id: createdAnnt._id});
  })
})

// READ: LOAD ANNOTATIONS
router.get('/annotation/annotations', (req, res) => {
    const reqOrigin = req.headers.referer;
    Annotation.find({uri: reqOrigin}, function(err, allAnnotations){
      if(err) {
        console.log(err);
      }else{
        //if no error, list allAnnotations by way of its ._id
        for ( let ele of allAnnotations) {
          ele._doc.id = ele._id
        }
        res.json(allAnnotations);
      }
    })
})

//UPDATE: UPDATE ANNOTATIONS
router.put('/annotation/update/:id', (req, res) => {
  Annotation.findByIdAndUpdate(req.params.id, req.body, function(err, updatedAnnt){
      if(err){
        console.log(err);
      } else{
        res.json({id: updatedAnnt._id});
      }
    })
})

// DESTROY: DELETE ANNOTATIONS
router.delete('/annotation/delete/:id', (req, res) => {
    //retrieve the data from req.body and delete it from the annotation array with the id
  Annotation.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err) {
      console.log(err);
    } else{
      res.json({id: 0})
    }
  })
})


module.exports = router;