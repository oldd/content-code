// require things
var express 	= require('express');
var app 		= express();
var path 		= require('path');
var bodyParser  = require('body-parser')

var port        = 3000;
// let's add a local array as an ejs teaching moment
var localDB     = [];

// ----- configure things (middleware) ------
// turn the http objects into js objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// path:making sure express can find the 'public' folder
// no matter where the app folder happens to be
// static: serving things like css so its there when they need it
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
	res.render('index2', {data: localDB, newest: req.params.variable});
	localDB.push(req.params.variable);
});

// ------ initialize app --------
// open a server on port 3000
app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

// notice all the callbacks. everywhere
