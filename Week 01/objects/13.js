
//__________---------____----_______-----____--_----___-//          

//	official javascript syntax for constructor functions  
// 	not a big leap - nothing has changed from 10.js but the syntax

// creates the same object as in 10.js 	
function OGaccount(money) {
	this.cash = money;
	this.changeCash = function(deltaCash) {
			this.cash = this.cash + deltaCash;
		};
	this.displayCash = function(){
			console.log('i has this many monies: ' + this.cash);
		};
};

var accObj = new OGaccount(6);
console.log(accObj)

// ---------------------------------- //

// var accObj = new OGaccount(6);
// console.log(accObj)
// accObj.displayCash();
// accObj.changeCash(7);
// accObj.displayCash();


// (slight) challenge:  give the constructor a default value for money