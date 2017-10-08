// require things
var express 	= require('express');
var app 		= express();

// ----- configure things (middleware) ------
var port        = 3000;

// ------ handle requests (handlers) -------
// requests of type 'get' for path '/' enter here
app.get('/', function(req, res){
	res.send('./index.html');
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
