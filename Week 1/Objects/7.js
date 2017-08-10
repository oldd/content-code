//	OBJECT METHODS:  properties with a function as it's value

var obj = {
	printIt: function(word){console.log(word)}
};

// ------------------------------------  //

// obj.printIt is a function
console.log(obj.printIt)

// and so can be called like any other function
obj.printIt("yo");
obj["printIt"]("po")