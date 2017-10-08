**Let's start with Express then
===============================================================================
As documentation suggests,after we initiated our project (<code>npm init</code>)
Then,we go and type <code>npm install express --save</code>.
Go now and install <i>body-parser</i>, the same way as before.
===============================================================================
**Remember that in the Node-Express world we have the middleware,to play with it go and try that:
===============================================================================
<code>
	app.use(function(req, res, next){
		console.log("Time right now is: " + Date.now());
		next();	
	});
</code>


**I see that even if i do everything well, still i get errors,the line that makes me see the things i ve built is the following.
===============================================================================
<code>app.use(express.static(path.join(__dirname, 'public')));</code>

**This line,tells my app where to look and serve static files.As you can see my static files now will be served from the <i>public</i> folder, where i will put my index.html file.
