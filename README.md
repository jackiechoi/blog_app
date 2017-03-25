# medium_app
Blogging app with comment/mark functionality

RESTFUL ROUTES

INDEX = {path: /blogs, Http verb: GET, Purpose: Display a list of all blogs}

NEW = {path: /blogs/new, Http verb: GET, Purpose: Displays form to make a new blog}

CREATE = {path: /blogs, Http verb: POST, Purpose: create a new blog and save to DB}

SHOW = {path: /blogs/:id, Http verb: GET, Purpose: Show info about one specific blog}

NEW = {path: /blogs/:id/comments/new, Http verb: GET, Purpose: Displays form to make a new comment}

CREATE = {path: /blogs/:id/comments, Http verb: POST, Purpose: create a new comment and save to DB}