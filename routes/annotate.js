var express = require('express'),
	router = express.Router();
	//Blog = require('../models/blog'),
	//Comment = require('../models/comment'),
	//annotator = require('annotator'),
    //passport = require('passport');	

const annotations = []

// LOAD ANNOTATIONS
router.get("/annotation/annotations", (req, res) => {
    const reqOrigin = req.headers.referer
    const pageAnnotations = annotations.filter( (ele) => ele.uri === reqOrigin )
    res.json(pageAnnotations)
})

// STORE ANNOTATIONS
router.post("/annotation/store", (req, res) => {
    console.log(req.body)
    const ID = annotations.length
    req.body.id = ID
    annotations.push(req.body)
    res.json({id: ID})
})

// UPDATE ANNOTATIONS

//https://blog.yipl.com.np/annotating-content-with-annotatorjs-in-webpages-2dbcaebbdf29#.25v1gyqo7

/*
var ann = new annotator.App();
ann
.start()
.then(function () {
     ann.annotations.load();
});


//UPDATE
app.put('/annotation/update/:id', function(req, res){
	$annotation = Annotation::find($id);
    if($annotation) {
        $data = json_decode($request->getContent(), true);
        $annotation->ranges = $data['ranges'];
        $annotation->quote = $data['quote'];
        $annotation->text = $data['text'];
        $annotation->page_id = $data['page_id'];

        if($annotation->save()) {
            return response()->json(['status' => 'success']);
        }
    }
    return response()->json(['status' => 'error']);
})

// DELETE
app.delete('/annotation/delete/:id}', function(req, res){
	if(Annotation::destroy($id)) {
        return response()->json(['status' => 'success']);
    }

    return response()->json(['status' => 'error']);
})
*/

module.exports = router;