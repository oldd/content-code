// -------------------------------------------------------
// lesson 2-3, global context - beware							 
// -------------------------------------------------------
console.log('lesson 2-3:');

// there exists a global object and context at the scope of a page. 

// if you handle context properly you shouldn't need to know this exists, 
//  but knowing that it exists can help solve mystery bugs.
// it is good practice to avoid ever using the global object or context.

// if you can't get enough of this:
//  http://stackoverflow.com/questions/4862193/javascript-global-variables
// otherwise just know it exists. 

// the global object
//console.log(global);
global.y = 1;
//console.log(global.y);
//console.log('\n');

// 'this' does not point to the global object
//console.log(this);
this.y = 2;
//console.log(this);


// try predicting what each block will do before logging it

var withThis = function(x) {
	y = 3;
	return this.y + x;
};
// console.log(withThis(10));


var withoutThis = function(x) {
	y = 3;
	return y + x;
}
// console.log(withoutThis(10));


this.withThis = withThis;
// console.log(this.withThis(10));

this.withoutThis = withoutThis;
// console.log(this.withoutThis(10));

global.withThis = withThis;
// console.log(global.withThis(10));

global.withoutThis = withoutThis;
// console.log(global.withoutThis(10));







