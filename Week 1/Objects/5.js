// 	add a functionality:  default account creation.
//		if no account is passed in, create a new account with the passed value


var accObj0 = {cash: 0};

// now has default account creation
var changeCash = function(money, oldAccount) {
	var newAccount = {cash: 0};
	// checks to see if oldAccount was passed in
	if (oldAccount == undefined) {
		newAccount.cash = money;
	}
	else {
		newAccount.cash = oldAccount.cash + money;
	}
	return newAccount;
};

// --------------------------- //

var newAccObj = changeCash(6);
console.log(newAccObj);

newAccObj = changeCash(-3, newAccObj);
console.log(newAccObj);








