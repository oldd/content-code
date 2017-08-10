//  with a function

var accObj = {cash: 0};

// takes positive or negative numbers and updates the account
var changeCash = function(money) {
	accObj.cash = accObj.cash + money;
};



// -------------------------------- //

console.log(accObj.cash);

changeCash(1); 

console.log(accObj.cash);

changeCash(-1);

console.log(accObj.cash);