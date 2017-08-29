// ------------------------------------------------------
// lesson 3, the Function								
// ------------------------------------------------------
console.log('lesson 0:');

// The Function is the default end to all function
//  inheritance chains. It defers only to the Object 
//  It is built into javascript.  functions like 
//  'toString' come from here.  anything your objects have
//  that you didn't write yourself come from here


// don't worry too much about this one for now
// keep refering back to it and it will come into focus
console.log(Object.getOwnPropertyNames(Function));
console.log('\n');
// notice that the following two are the same in this case
//  but different in the Object case
console.log(Object.getOwnPropertyNames(Function.prototype));
console.log('\n');
console.log(Object.getOwnPropertyNames(Function.__proto__));
console.log('\n');
// these next two should look familiar from previous lessons
console.log(Object.getPrototypeOf(Function.__proto__));
console.log('\n');
console.log(Function.__proto__.__proto__);






