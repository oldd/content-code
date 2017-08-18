var obj = {
 property: 'obj',
 bound: function(){
   function funct(){
     console.log(this.property)
   }
    return funct.bind(this)
 },
 unbound: function(){
   function funct(){
     console.log(this.property)
   }
    return funct
 }
};

var otherObj = {
	property: 'otherObj'
}

var bound = obj.bound();
var rebound = bound.bind(otherObj);
bound();
rebound();


var unbound = obj.unbound();
var reunbound = unbound.bind(otherObj);
unbound();
reunbound();


// beyond here be dragons
var objectistest = {
	method: function() {
		return this.method();
	}
};
