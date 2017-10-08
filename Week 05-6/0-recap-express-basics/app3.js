// require things
var express 	= require('express');
var app 		= express();
var path 		= require('path');
var port        = 3000;

// ----- configure things (middleware) ------
// making sure express can find the 'public' folder
// no matter where the app folder happens to be
app.use(express.static(path.join(__dirname, 'public')));

// ------ handle requests (handlers) -------
// requests of type 'get' for path '/' enter here
app.get('/', function(req, res){
	res.render('./index.html');
});

// requests of type 'get' for path '/new' enter here
app.get('/new', function(req, res){
	res.send('hello there');
});

// ------ initialize app --------
// open a server on port 3000
app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

// notice all the callbacks. everywhere
