// 	Introducing:  CONSTRUCTOR FUNCTIONS
// 	
//	The function from 5.js does two things:
//		updates an account's cash money
//		creates a new account if none is passed in

//	lettuce write one function for each task 

//	a constructor function is just a function that returns
//		a new object of a particular type.
//	all objects it creates will be identical except for the 
//		amount of cash money they've got


// 	a basic constructor function
var createAccount = function(money) {
	var newAccount = {};
	// property assignments will add the property if it didn't exist
	newAccount.cash = money;
	return newAccount;
};

// 	same as before
var changeCash = function(money, oldAccount) {
	var newAccount = {};
	newAccount.cash = oldAccount.cash + money;
	return newAccount;
};


// --------------------------- //

var bank = [];
for (var i = 0; i < 5; i++) {
	var newBank = createAccount(i);
	bank.push(newBank);
};
console.log(bank);

for (var i = 0; i < 5; i++) {
	var newBank = changeCash(i, bank[i]);
	bank.push(newBank);
};
console.log(bank);













