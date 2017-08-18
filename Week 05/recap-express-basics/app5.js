// require things
var express 	= require('express');
var app 		= express();
var path 		= require('path');
var bodyParser  = require('body-parser')

var port        = 3000;

// ----- configure things (middleware) ------
// turn the http objects into js objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// making sure express can find the 'public' folder
// no matter where the app folder happens to be
app.use(express.static(path.join(__dirname, 'public')));

// you can do whatever you like in middleware
// this one is a simple http logger. it's slow
app.use(function(req, res, next) {
	console.log('----------- request -----------');
	console.log(req);
	console.log('----------- response -----------');
	console.log(res);
	next();
});

// ------ handle requests (handlers) -------
// requests of type 'get' for path '/' enter here
app.get('/', function(req, res){
	res.render('./index.html');
});

// requests of type 'get' for path '/new' enter here
app.get('/new/:variable', function(req, res){
	var variable = req.params.variable;
	res.send(variable);
});

// ------ initialize app --------
// open a server on port 3000
app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

// notice all the callbacks. everywhere
