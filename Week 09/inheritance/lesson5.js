// ------------------------------------------------------
// lesson 5, functions have prototypes too			 
// ------------------------------------------------------
console.log('lesson 5:');


var a = new Function('console.log(\'a\')');

var b = new Function('console.log(\'b\')');

var c = new Function('console.log(\'c\')');

a();
b();
c();