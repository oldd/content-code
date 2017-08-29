// ------------------------------------------------------
// lesson 1-3, pure prototypical inheritance				 
// ------------------------------------------------------
console.log('lesson 1-3:');

// 'live' prototype updating,  again.
// because it's very important


var a = {
  x: 1,
  y: 11,
  z: 111
};
 
var b = {
  y: 22,
  z: 222,
  __proto__: a
};

var c = Object.create(b);
c.z = 333;

//c = {z: 333, __proto__: b}
	
// uncomment each of these blocks one at a time

console.log(c.x);
console.log(c.y);
console.log(c.z);
b.x = 2;
console.log(b);
console.log(c.x);
console.log(c.y);
console.log(c.z);

// console.log(a.x);
// console.log(b.x);
// console.log(c.x);
// a.x = 7;
// console.log(a.x);
// console.log(b.x);
// console.log(c.x);

// console.log(a.y);
// console.log(b.y);
// console.log(c.y);
// b.y = 7;
// console.log(a.y);
// console.log(b.y);
// console.log(c.y);

// console.log(a.z);
// console.log(b.z);
// console.log(c.z);
// c.z = 7;
// console.log(a.z);
// console.log(b.z);
// console.log(c.z);



