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
		title: "How To Curate the Perfect Cheese Plate",
		image: "/img/cheese.jpg",
		body: "It's time to embrace the cheesy side of life. And there’s no better way to do so than to get down with a classic cheese board, complete with all the best fixings. Here are our favorite pointers on assembling a classic cheese plate, including how to pick the best specimens, which cheeses should make the cut, and what tricks to keep in mind when assembling (and eating) your plate.   * What Kind of Cheese Should I Buy?   Once you’ve picked a great cheese retailer, choose your cheeses. A classic cheese plate will have representation from all of the major milk types (cow, sheep, and goat) and will showcase a range of cheese styles, such as: Fresh & young: Think fresh or lightly aged goat cheese, farmer's cheese, and ricotta. Bloomy rinded: Mushroomy and earthy, typically soft and creamy, with a fluffy white rind. Washed rind: Soft to semi-soft in texture, and stinky in the best possible way. Semi-firm: Creamy, smooth texture, and rich flavor. Firm & aged: Hard texture – can be crumbly – and lingering nutty umami flavor. Blue: Creamy texture, with a pungent aroma and a sharp, salty bite. Pick anywhere from four to six cheeses, and be sure to hit a range of styles.   * Setting Up Your Cheese Board  When ready to serve, pull your cheeses out of the refrigerator one-and-a-half to two hours before serving. Cheeses taste best at room temperature! Keep them wrapped so they don’t dry out. Choose a cheese board that’s large enough to hold all of your cheeses, or divide your selections between a few smaller boards. Make sure there's enough elbow room to slice the cheeses and give them some breathing room. Set out one knife per cheese, so as not to cross-pollinate flavors. As far as other nibbles to pair with your cheeses, there really is no limit. Nuts, dried fruit, grapes, honeys, and jams are classic choices, along with simple crackers, fruit breads, olives, and plain baguette. If you want to branch out a bit, try some chutneys and mostardas, a pressed fig cake, candied nuts, or even chocolate. In the same way that a slice of great cheese will elevate a burger, certain accompaniments will help elevate your experience of the cheese. It’s all about pairing great flavors together to increase your enjoyment of each single element. Pile these pairings onto the board in an artful way. Get creative with it! But most of all, enjoy! Crack a great bottle of wine or purchase a special beer. So go on — dig in, settle down, and embrace your cheesiness."
	},
	{
		title: "Fitness",
		image: "/img/quote.jpg",
		date: "Sat Mar 21 2017",
		body: "Ask most trainers and they'll tell you that a healthy workout routine consists of strength training, cardio, and rest days, ideally spread throughout the week. But for those of us who love two-a-days or long sessions at the gym or just need to maximize our time, the common question seems to be: Which do I do first, strength or cardio? This was the burning question I had for Natalie Carey, certified trainer and sports nutritionist at DIAKADI Fitness.  \"Strength training should always come first — always,\" Natalie said without skipping a beat. The benefits of structuring your workouts this way are plenty, she added. If losing weight is your goal — specifically fat — weight training before your cardio session has major benefits, Natalie said. She explained that strength training increases the \"afterburn effect.\" Your resting metabolism rate is heightened and your body is working to help your muscles recover, which results in an increased calorie burn long after the workout is over. This is an ideal place to be in when you hit your cardio session."
	},
	{
		title: "SF",
		image: "/img/sf.jpg",
		date: "Sat Mar 23 2017",
		body: "San Francisco, in northern California, is a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay.  It\'s known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. The Financial District's Transamerica Pyramid is its most distinctive skyscraper. In the bay sits Alcatraz Island, site of the notorious former prison. It’s safe to say that the rest of the country has some assumptions about San Francisco, regularly reducing our city to a bunch of techies, hippies, liberals and nudists. While our reputation precedes us, San Franciscans cannot be reduced to stereotypes. It’s no secret that the city is changing, but like all living things, that’s what cities do to survive — whether the changes are good or bad, cities evolve. The rents may rise and social demographics change, but one thing that will never be gentrified is San Francisco’s heart and the fact that those who live here love it. "
	},
	{
		title: "Twitter",
		image: "https://www.webpagefx.com/data/why-twitter-matters-to-marketing/img/02-twitter-marketing-users.png",
		date: "Sat Mar 22 2017",
		body: "Twitter is an online news and social networking service where users post and interact with messages, \"tweets,\" restricted to 140 characters.  Registered users can post tweets, but those who are unregistered can only read them.  23% of all Internet users are on Twitter. That's an incredible population of potential customers, and there are bound to be at least a few good leads for you. Generally, Twitter tends to be more popular with men than women, and in terms of age (as opposed to generation), 40% of all users are between 18-34. Beyond that, more than 26% of Twitter users earn $75,000 annually, giving them a substantial disposable income. But even looking beyond users, you still have to take into account the people who visit Twitter without having an account. Surprisingly, that winds up being about 500 million people every month. That gives you half a billion more potential customers that can see your Twitter profile, even if they can't interact with it. Beyond that, Twitter users tend to be highly active on their profiles. They send about 6000 tweets every second. Assuming each tweet is 140 characters, that's 840,000 characters every second. Considering the average book page contains about 5000 characters, that's 168 pages of text — roughly the size of The Strange Case of Dr. Jekyll and Mr. Hyde."
	}
]

function seedDB(){
	/*Blog.remove({}, function(err){
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
	});*/
}

module.exports = seedDB;
