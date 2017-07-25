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
// configure app to use ejs
app.set('view engine', 'ejs');

// ------ handle requests (handlers) -------
// requests of type 'get' for path '/' enter here
app.get('/', function(req, res){
	res.render('./index.html');
});

// requests of type 'get' for path '/new' enter here
app.get('/greetings/:variable', function(req, res){
	// use ejs, notice it's gotta be in views
	res.render('index0', {variable: req.params.variable});
});

// ------ initialize app --------
// open a server on port 3000
app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

// notice all the callbacks. everywhere
