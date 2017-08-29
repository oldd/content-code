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
  //__proto__: a,
  prinTit: function(){console.log(b.z);}
};

var c = Object.create(b);
c.z = 30;

var e = {};
Object.setPrototypeOf(e,b);
e.z = 6;

var d = {
	z: 40
}
Object.setPrototypeOf(d, c);

//e.prinTit();











function maker(x){
	this.x = x;
	console.log(x);
	return 5;
};

var obj = new maker(4);
console.log(obj);

maker(4)

var obj2 = maker(4);
console.log(obj2);





// {x}


  
