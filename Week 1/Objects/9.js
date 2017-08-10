//	'CONTEXT':  a new concept
// 
// 	'context' is the study of one variable name
//		having different values in different execution scenarios

//	almost like scope, but tied to dynamic behavior
//		rather than source-code blocking	

var tim = "globalContext";

var contextGlobal = function() {
	console.log(tim);
};

var context1 = function() {
	var tim = "context1";
	console.log(tim);
};

var context2 = function() {
	var tim = "context2";
	console.log(tim);
};



// ------------------------------//

console.log(tim);
context1();
context2();
contextGlobal();

// let's change 'contextGlobal's context to timmy
// 'bind' is a pure function
var timmy = {tim: 'rien'};
contextGlobal.apply(timmy);
