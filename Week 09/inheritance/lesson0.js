// ------------------------------------------------------
// lesson 0, the Object 								
// ------------------------------------------------------
console.log('lesson 0:');

// The Object is the default end to all inheritance
//  chains.  It is built into javascript.  functions like 
//  'toString' come from Object.  
// anything your objects can do that you didn't write yourself 
// 	come from Object

console.log(Object.getOwnPropertyNames(Object));
console.log('\n');
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log('\n');
console.log(Object.getOwnPropertyNames(Object.__proto__));
console.log('\n');

var obj = {};
console.log(obj.toString());




// take a skim through the documentation:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object







