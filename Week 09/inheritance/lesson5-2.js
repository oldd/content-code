// ------------------------------------------------------
// lesson 5-2, functions have prototypes too			 
// ------------------------------------------------------
console.log('lesson 5-2:');

// one thing you'll notice in this file is the rediculous variety
//  of ways there are to declare functions in javascript.
// annoyingly enough, each one behaves slightly differently from
//  the others.  this site is an overview:
//     http://davidbcalhoun.com/2011/different-ways-of-defining-functions-in-javascript-this-is-madness/

// function constructor
var a = new Function('console.log(\'a\')');

// function declaration 
function b() {
	console.log('b');
};

// function expression
var c = function(){
	console.log('c');
};

// named funciton express
var d = function dd() {
	console.log('d');
}

// leveraging functions' object-hood
var e = Object.create(d);


// while you're working up the shits to give, we recommend the named
//  function expression (see if you can figure out why):
// 				var funky = function funky() {};

