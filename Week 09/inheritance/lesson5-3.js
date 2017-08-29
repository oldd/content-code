// ------------------------------------------------------
// lesson 5-3, 'prototype' vs '__proto__'			 
// ------------------------------------------------------
console.log('lesson 5-3:');

// lettuce clear this up before it gets confusing with constructors

//    how are 'prototype' and '__proto__' different?

// these examples and the diagram will answer this question

// create function a
var a = function a() {
	console.log('a');
}
// assign a property to a's prototype
a.w = 'w';

// create function b
var b = function b() {
	console.log('b');
};
// assign a property to b's prototype
b.prototype.x = 'x';
Object.setPrototypeOf(b, a);

// the same as above but with 'c's
var c = function c(){
	console.log('c');
};
c.prototype.y = 'y';
c.__proto__ = b;
c.__proto__.cow = 'cow';

// something funny's happening here
var d = function d(){
	console.log('d');
};
d.prototype.z = 'z';
d.__proto__ = c.prototype;

console.log(a.prototype);
console.log(a.__proto__);
console.log(b.prototype);
console.log(b.__proto__);
console.log(c.prototype);
console.log(c.__proto__);
console.log(d.prototype);
console.log(d.__proto__);
console.log('\n');
// figure this one out
console.log(b.w);
// --------------------  yess   -----------------
console.log(c.__proto__.cow);
console.log(b.cow);





