// -------------------------------------------------------
// lesson 2, context in context							 
// -------------------------------------------------------
console.log('lesson 2:');

// for this exercise, see what happens when you comment 
//   and uncomment different 'prinTit's
//   also see what happens when you play with 'z' in line 11

var a = {
  prinTit: function(){console.log(this.z);},  
  w: 10
};

var b = {
  x: 20,
  __proto__: a
};

var c = Object.create(b);
c.y = 30;

var d = {
	z: 40
}
Object.setPrototypeOf(d, c);

a.prinTit();
b.prinTit();
c.prinTit();
d.prinTit();