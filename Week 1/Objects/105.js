constructorFunction

constructorFunction.prototype = {/*things*/};

var turd = new constructorFunction();

turd.__proto__ // -> constructorFuntion.prototype;





var accountGenerator = function(money) {
	// identical to the object in 8.js
	prototype: {};
	var newAccount = {
		cash: money,
		changeCash: function(deltaCash) {
			this.cash = this.cash + deltaCash;
		},
		displayCash: function(){
			console.log('i has this many monies: ' + this.cash);
		};
		__proto__: // accountGenerator prototype property;
	};
	return newAccount;
};

var accObj = accountGenerator(6)
console.log(accObj)












var constructorFunction = function(uniqueProperties) {
	this.uniqueProperties = uniqueProperties;
	name: 'franklyn';
	this.name = uniqueProperties.name;
};

constructorFunction.prototype.sharedMethod = function(){
	console.log(this.name);
};

constructorFunction.prototype.sharedProperty = {};

constructorFunction.prototype.itself = constructorFunction;


var newObject = new constructorFunction(5);

// execution context in js inheritance
newObject.sharedMethod()


// newObject.__proto__ -> constructorFunction.prototype

// all functions by default have a .prototype
// all objects by default have a __proto__

var newParent = {};
newObject.__proto__ = newParent;
newParent.__proto__ = constructorFunction.prototype;



polymorpheme: config (namespace) passed in.  constructor changes functionality of instance based on what now
	same class, different behavior.  depending on now needs

















function func() {
	name: 'franklyn';
	return this.name;
}

func.name;






