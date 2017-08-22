var http = require('http');
var fs   = require('fs');

var host = '127.0.0.1';
var port = '3000';

fs.readFile('./index.html', function(err, html){
	if(err) {
		console.log(err);
		return;
	}

	//Remember Node is Asynchronous,so after no error occurs then it will
	//run the rest.

	var server = http.createServer(function(req, res) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write(html);
		res.end();
	});

	server.listen(port, host, function(){
		console.log("Server is running on port: " + port);
	});
})
