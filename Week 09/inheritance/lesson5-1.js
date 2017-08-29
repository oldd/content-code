// ------------------------------------------------------
// lesson 5-1, functions are objects			 
// ------------------------------------------------------
console.log('lesson 5:');

// javascript functions are first and foremost Objects.  
// then they are other things.  

// the two most relevant differences is that functions can be called
//  and that they can be used to create new objects (more on that later)
// after this week you will know exactly how and why they are different

var a = new Function('console.log(\'a\')');
a.x = 'x';

function b() {
	console.log('b');
};
b.y = 'y';

var c = function(){
	console.log('c');
	console.log(c.caller);
	console.log(c.__proto__);
	
	console.log(this.z);
};
c.z = 'z';
c.__proto__.z = 'nickkkkk';

//a();
//b();
console.log('_____');
c();

console.log(a.x);
console.log(b.y);
console.log(c.z);





