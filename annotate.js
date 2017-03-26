var express = require('express'),
		app = express(),
		annotator = require('annotator'),
		bodyParser = require('body-parser'),
		methodOverride = require("method-override");

//https://blog.yipl.com.np/annotating-content-with-annotatorjs-in-webpages-2dbcaebbdf29#.25v1gyqo7

var ann = new annotator.App();
ann
.start()
.then(function () {
     ann.annotations.load();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

/*
// LOAD ANNOTATIONS
app.get('/annotation/search', function(req, res){
	// $annotations = Annotation:where('page_id', $request->get('page'))->get();

 //    return response()->json(['total' => count($annotations), 'rows' => $annotations]);
 res.send('annotations!')

})


// STORE
app.post('/annotation/store', function(req, res){
	$data = json_decode($request->getContent(), true);
    $annotation = [
        'ranges' => $data['ranges'],
        'quote'  => $data['quote'],
        'text'   => $data['text'],
        'page_id'   => $request->get('page')
    ];

    if($id = Annotation::create($annotation)) {
        return response()->json(['status' => 'success', 'id' => $id]);
    } else {
        return response()->json(['status' => 'error']);
    }
})

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
