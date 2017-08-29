// -------------------------------------------------------
// lesson 2-1, context in context							 
// -------------------------------------------------------
console.log('lesson 2-1:');


//-- here is a great article on context:
//--  http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/


// for this exercise, see what happens when you comment 
//   and uncomment different 'prinTit's
//   also see what happens when you play with 'z' in line a's object

var a = {
  prinTit: function(){console.log(this.z);},  
  z: 10
};

var b = {
  z: 20,
  __proto__: a
};

var c = Object.create(b);
c.z = 30;

var d = {
	z: 40
}
Object.setPrototypeOf(d, c);

a.prinTit();
b.prinTit();
c.prinTit();
d.prinTit();

