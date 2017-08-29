// ------------------------------------------------------
// lesson 1-2, branching and 'live'				 
// ------------------------------------------------------
console.log('lesson 1-2:');

// here you're seeing two things.  The first is the assignment
//  of two objects to the same prototype
// The second is the 'live' nature of javascript prototypes.
//  when an object is created, it doesn't store a copy of its 
//  prototype.  instead it stores a refrence to its prototype
//  wherever that prototype lives.  
//  this implies that when you update the prototype, all inheriting
//  objects' behavior will change simultaneously.
//     ^---  this is very important to know  ---^
// here is your first glimpse of what's going on when you 
//  use 'new' in front of a funciton

var a = new Object;
a.x = 10;

 

// two objects with the same prototype
var b = {
  __proto__: a
};

var c = Object.create(a);
c.y  = 20;
console.log(b.y);


console.log(b.x);
console.log(c.x);

// modifying the prototype instantly modifies 
//  both child objects.
// the prototype object is 'live'
a.x = 1;

console.log(b.x);
console.log(c.x);

// overwriting inherited properties will negate this effect

b.x = 100;
a.x = 10;

console.log(b.x);
console.log(c.x);






