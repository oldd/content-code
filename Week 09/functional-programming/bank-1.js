var nextTransaction = (transactions) => (type, value) => {
        return transact(type, value, transactions)
}

var transact = (type, value, transactions) => {
    switch(type){
        case "add":
            console.log(`Added: ${value}€`);
            return nextTransaction(transactions.concat(value))
        case "withdraw":
            console.log(`Withdrawn: ${value}€`);
            return nextTransaction(transactions.concat(value * -1))
        case "tot":
            console.log(`\nTotal balance: ${transactions.reduce((a, b) => a + b, 0)}€`)
            return nextTransaction(transactions)
        default:
            console.log("returning transaction history...")
            return transactions
    }
}

var bankAccount = function (transactions = [0]){
    return nextTransaction(transactions)
}

bankAccount() //
    // function (type, value) { // type in ["add", "withdraw", "tot", "state"]
    //     return transact(type, value, transactions)
    // }


var accountState = (bankAccount()("add", 10))("withdraw", 5)("tot")("add", 1000)("lkjsdfg");

bankAccount(accountState)("withdraw", 999)("tot")
