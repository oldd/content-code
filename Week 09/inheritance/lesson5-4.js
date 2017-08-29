var farm = function farm() {};
farm.prototype.farmPro = 'farmPro';
farm.farmOnly = 'farmOnly';

var kitchen = function kitchen() {};

// the '__proto__' property of an object serves as a pointer.
// it indicates from which object properties will be inherited.
// using '__proto__' is like using the higher object itself.
// kitchen.__proto__ = farm;
// console.log('\n');
// console.log(kitchen.farmOnly);
// console.log(kitchen.farmPro);

// kitchen.__proto__ = farm.prototype;
// console.log('\n');
// console.log(kitchen.farmOnly);
// console.log(kitchen.farmPro);

// kitchen.__proto__ = {x: 'x'};
// console.log('\n');
// console.log(kitchen.farmOnly);
// console.log(kitchen.farmPro);
// // what's this about?
// console.log(kitchen.x);
// console.log(kitchen.__proto__.x);
// console.log(kitchen.__proto__.__proto__.x);


// neither of the following cases will work.
// the 'prototype' is simply a property that is also an object
//  to access it you must access it like any other property
// kitchen.prototype = farm;
// console.log('\n');
// console.log(kitchen.farmOnly);
// console.log(kitchen.farmPro);
// // ------------------------------
// kitchen.prototype = farm.prototype;
// console.log('\n');
// console.log(kitchen.farmOnly);
// console.log(kitchen.farmPro);
// // ------------------------------- 
// console.log('\n');
// console.log(kitchen.prototype.farmPro);




