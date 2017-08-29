// -------------------------------------------------------
// lesson 2-2, more on this							 
// -------------------------------------------------------
console.log('lesson 2-2:');

// functions, as objects, provide their own context
//  if none other is given
var withThis = function(x) {
	var y = 2;  // vs w/o var
//-------------------------   tweaker  --------------------------
	return this.y + x;
};

var withoutThis = function(x) {
	y = 2;
	return y + x;
}

// uncomment these one at a time and see what happens
console.log(withThis(10));
console.log(withoutThis(10));


// calling with another object supercedes the function's
//  built-in context -> iff 'this' is used
var obj = {
	y: 3,
	with: withThis,
	without: withoutThis
}

// uncomment these one at a time and see what happens
console.log(obj.with(10));
console.log(obj.without(10));



