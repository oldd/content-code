// ------ require things -------
// require express
var express 	= require('express');
// initialize express (a function that returns an object)
var app 		= express(); 

// ------ configure things -------
// choose a port
var port        = 3000;

// ------ initialize app --------
// open a server on port 3000
app.listen(port, function(){
	console.log("Server is up on port: " + port)
});

// notice all the callbacks. everywhere
