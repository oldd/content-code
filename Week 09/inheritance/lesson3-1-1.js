// ------------------------------------------------------
// lesson 3-1-1, 'obj.bind()' - permanenetly reassigning context	 
// ------------------------------------------------------
console.log('lesson 3-1-1:');

// the following 3 part lesson is to give you an in-depth 
//  understanding of context by demonstrating the 3 main ways
//  to manipulate it.  all of lesson 3 will require you to 
//  dig in and make mistakes if you expect to realy learn it.

// check out these websites for more code samples and use cases.
//  http://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
//  http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

// as usual, read the documentation on mozilla

function doing() {
	console.log(this.what);
}

var aliza = {
	what: 'done',
	doing: doing
}

// the context you're used to
aliza.doing();
// what you can do with '.bind()'
doing.bind(aliza);

// --- find out where which object owns '.bind()' ---

// learn this well.   understanding this will serve you well
//  when we cover closures 