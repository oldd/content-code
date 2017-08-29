
// -------------------------------------------------------
// lesson 2-3, passing context						 
// -------------------------------------------------------
console.log('lesson 2-3:');

// there exists a global object at the scope of a page

console.log(this);
this.y = 1;
console.log(this);

// try predicting what each block will do before running it


// var withThis = function(x, aContext) {
// 	y = 2;
// 	return this.y + x;
// };
// console.log(withThis(10));


// var withoutThis = function(x, aContext) {
// 	y = 2;
// 	return y + x;
// }
// console.log(withoutThis(10));


// this.withThis = withThis;
// console.log(this.withThis(10));





