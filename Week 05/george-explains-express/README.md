**So let's recap,What is Node JS?
==============================================================================

Long Answer: 
	Node js is a platform built on Chrome'sJavaScript runtime.It is used to build
	fast, scalable network applications.It uses an <i>event-driven</i>, <i>non-blocking    I/O</i> model that makes it lightweight and efficient, that is why it's perfect for building real-time applications

Short Answer:
	JavaScript on the Server or JavaScript on the Backend.
==============================================================================

**So what is that that makes Node JS that great for us?
==============================================================================
	Asynchronous I/O
		--> Does not need to wait one process to finish before starting the other, that 
				is called Non-Blocking.
		--> Optimizes throughput and scalability in Web Apps with many I/O operations.
		--> Event-Driven Programming.
		==>Those make Node JS apps extremely <b>fast</b> and <b>efficient</b>
==============================================================================
**What do you mean that it is <b>Event-Driven</b>?
==============================================================================

Node JS sits on a <b>Single thread</b> and waits for events.As soon as Node runs the Server, it initiates all the <b>variables</b> and <b>functions</b> and then it simply waits for events to occur.
After that(event happens) it triggers a <b>callback function</b> when one of those events gets detected.So when an event gets fired,its listener function starts executing.
That's why we have <b>EventEmitter class</b> that is used to bind events and add Event listeners.
==============================================================================


**Simple Example
==============================================================================
<code>
	//i bring the File System module

	var fs = require("fs");

	//After we save File system to a variable, we take that object and we
	//call the <i>readFile</i> function.This, takes in the name of the file 
	//and then a <i>callback</i> function.
	
	fs.readFile('input.txt', function(error, data){
		if(err){
			console.log(err.stack);
			return;
		}
		console.log(data.toString());
	});
	console.log("Program is now ended!");
</code>
==============================================================================
**Platform Specifications
==============================================================================
Available as/for:
<ul>
	<li>-->Windows, Mac, Linux, Unix, SunOS ...more</li>
	<li>-->Comes as a binary installable</li>
	<li>-->Available on both 32-bit and 64-bit architectures</li>
	<li>-->Windows use a simple MSI installer</li>
	<li>--><b>REPL</b> client. Read, Eval, Print, Loop.(Basically a terminal that allowes us to run JS.)</li>
</ul>

==============================================================================
**So what is that NPM  you are talking about all that time?
==============================================================================
<b>Node Package Manager</b>
	-->Think of it as Online Repositories for node.js (packages/modules)
	-->Installs into a folder named <b>node_modules</b>

if you want to install a module, it would look like that:
	<code>npm install express</code> or
	<code>npm install ejs --save </code>(for saving in the depedencies) or
	<code>npm install nodemon -g </code>(where -g means <i>global</i> and its installed globally)

After we install it on the node_modules and the depedencies we need to include it to our project.It look like this now.
	<code>var express = require('express');</code>
==============================================================================
**So what are the types of Modules?
==============================================================================
<ul>
	<li><b>Frameworks</b> - Express js</li>
	<li><b>Template Engines</b> - Pug,EJS,HBS</li>
	<li><b>Utilities</b> - Path, OS, API Modules, Compilers</li>
	<li><b>Database ORM</b> - Mongoose, MongoJS</li>
</ul>