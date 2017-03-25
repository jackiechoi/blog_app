var mongoose = require('mongoose'),
		Blog = require('./models/blog'),
		Comment = require('./models/comment');

var data = [
	{
		title: "Puppy",
		image: "/public/img/puppy.jpg",
		body: "Puppies are adorable!"
	},
	{
		title: "Fitness",
		image: "/public/img/quote.jpg",
		body: "Fitness 4 lyfe"
	},
	{
		title: "SF",
		image: "/public/img/sf.jpg",
		body: "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It\'s known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison."
	},
	{
		title: "Twitter",
		image: "/public/img/twitter.jpg",
		body: "Twitter is an online news and social networking service where users post and interact with messages, \"tweets,\" restricted to 140 characters. Registered users can post tweets, but those who are unregistered can only read them"
	}
]

function seedDB(){
	Blog.remove({}, function(err){
		if(err){
			console.log(err)
		}
			console.log("Removed all blogs");
			data.forEach(function(seed){
				Blog.create(seed, function(err, newBlog){
				if(err){
					console.log(err)
				}else{
					console.log("Added a blog");
					//create a comment
					Comment.create(
						{
							text: "This picture is everything!", 
							author: "Charlie"
						}, function(err, comment){
							if(err){
								console.log(err);
							}else{
								newBlog.comments.push(comment);
								newBlog.save();
								console.log('Created a new comment');
							}
					});
				}
			})
		});
	});
}

module.exports = seedDB;
