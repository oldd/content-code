var express 		= require('express');
var app 				= express();

var pug 				= require('pug');
var port        = 3000;


app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('home', {
		title: "Hello, Elium!",
		showTitle: true,
		languages: ['Java','C#','PHP','Python']
	});
});

app.get('/new', function(req, res){
	res.send('hello there man');
});

app.get('/about', function(req, res){
	res.render('about');
});


app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

