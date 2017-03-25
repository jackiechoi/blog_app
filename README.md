RESTFUL ROUTES

name 			 url												verb		desc.
=====================================================================================
INDEX     /blogs				 							GET			Display a list of all blogs
NEW				/blogs/new 									GET			Displays form to make a new blog
CREATE		/blogs 											POST		Add new blog to DB
SHOW 			/blogs/:id 									GET 		Show info about one blog

NEW 			/blogs/:id/comments/new 		GET
CREATE		/blogs/:id/comments					POST