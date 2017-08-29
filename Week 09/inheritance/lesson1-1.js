// ------------------------------------------------------
// lesson 1-1, pure prototypical inheritance				 
// ------------------------------------------------------
console.log('lesson 1-1:');

// following are several illustrations of prototypical 
//  inheritance.  

// at each one, log __proto__ and prototype

// nothing special here, just an object literal
var a = new Object;
a.w = 10;
a.t = 50;
a.k = 70;

 
// almost just an object literal
// notice the '__proto__' assignment
var b = {
  x: 20,
  w: 'w',
  __proto__: a
};
// console.log(a.w);
// console.log(b.__proto__.w);
// console.log(Object.getOwnPropertyNames(b));
// console.log(Object.getOwnPropertyNames(a));

// var w = b.w;
// console.log(w);

// the following two lines are equivalent to 8-11
var c = Object.create(b);
c.y = 30;

// yet another way of setting inheritance
var d = {
	z: 40
}
// retroactive
Object.setPrototypeOf(d, c);


// //  pt. 3
// console.log('\n');
// //  a deeper look inside
// //  play around with Object.getPrototypeOf(i);
console.log(d);
console.log(d.__proto__);
console.log(c);
console.log(d.__proto__.__proto__);
console.log(b);
console.log(d.__proto__.__proto__.__proto__);
console.log(a);
console.log(d.__proto__.__proto__.__proto__.__proto__);
// //  this bit will make more sense later
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);




//  pt. 1
// 'c' has all three propterties,
//   notice where each one is defined
console.log(d.w);
console.log(d.x);
console.log(d.y);
console.log(d.z);


// //  pt. 2
// console.log('\n');
// // you can overwrite grandparents' properties
// d.w = 50;
// console.log(d.w);
// console.log(a.w);



// see what happens if you uncomment this:
// a.__proto__ = d;
