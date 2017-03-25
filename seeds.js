var mongoose = require('mongoose'),
		Blog = require('./models/blog'),
		Comment = require('./models/comment');

var data = [
	{
		title: "Puppy",
		image: "/img/puppy.jpg",
		date: "Sat Mar 25 2017",
		body: "Getting a dog is a big responsibility but getting a puppy is an even bigger one! Why? Because puppies have to learn how to do everything, and you’re the one who has to teach them how to do it. Although puppies can be a lot of work, it will all be worth it in the end because you’ll have a trained, balanced, adorable life-long companion for plenty of wonderful experiences and adventures. But you have to get through the hard stuff first. Luckily, that stuff can be made easier with some patience and the following Puppy 101 step-by-step guide, which will help you to deal with several of the most common puppy issues and point you to our articles that deal with them in-depth."
	},
	{
		title: "Fitness",
		image: "/img/quote.jpg",
		date: "Sat Mar 21 2017",
		body: "Ask most trainers and they'll tell you that a healthy workout routine consists of strength training, cardio, and rest days, ideally spread throughout the week. But for those of us who love two-a-days or long sessions at the gym or just need to maximize our time, the common question seems to be: Which do I do first, strength or cardio? This was the burning question I had for Natalie Carey, certified trainer and sports nutritionist at DIAKADI Fitness. \"Strength training should always come first — always,\" Natalie said without skipping a beat. The benefits of structuring your workouts this way are plenty, she added. If losing weight is your goal — specifically fat — weight training before your cardio session has major benefits, Natalie said. She explained that strength training increases the \"afterburn effect.\" Your resting metabolism rate is heightened and your body is working to help your muscles recover, which results in an increased calorie burn long after the workout is over. This is an ideal place to be in when you hit your cardio session."
	},
	{
		title: "SF",
		image: "/img/sf.jpg",
		date: "Sat Mar 23 2017",
		body: "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay. It\'s known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison."
	},
	{
		title: "Twitter",
		image: "/img/twitter.jpg",
		date: "Sat Mar 22 2017",
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
