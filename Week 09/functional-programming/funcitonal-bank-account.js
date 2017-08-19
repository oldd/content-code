// A litt bank account functionality

// create variables in the local scope in the global Scope
var add  
var withdraw 
var tot

function account (history = [0]) {
    var history = history

    // Assign functions to add, withdraw and tot wich are defined in the local scope

    add = function (val){
        // This function has access to the scope of account
        history.push(val)
        console.log(`Added: ${val}€`);
    }

    withdraw = function (val){
        history.push(val * -1)
        console.log(`withdrawn: ${val}€`);
    }

    tot = function (){
            console.log(`>>>>Total balance: ${history.reduce((a, b) => a + b)}`)
    }
}

history = [10, 20 ,1000]

// generate account, assign the respective functionalities to add, withdraw and tot variables
account(history)

add(10) !

withdraw(10)

withdraw(10)
withdraw(10)
tot()

add(100000)

tot()

// A litt bank account functionality where an account needs to be named in order to be usable;
// Remember, every time a function is called a new scope is created!

var add
var withdraw 
var tot
var close
var setInfo

startAccount = function(name){
    account()
    setInfo(name)
}

function account (history = [0]) {
    var line = "--------------------------------------------------"
    var history = history
    var info

    setInfo = function (name){
        info = name
        console.log(line, `\n Hello ${name}; you can start your transactions\n`)

    }

    add = function (val){
        history.push(val)
        console.log(`Added: ${val}€`);
    }

    withdraw = function (val){
        history.push(val * -1)
        console.log(`withdrawn: ${val}€`);
    }

    tot = function (){
        if(info){
            console.log(`>>>>Total balance: ${history.reduce((a, b) => a + b, 0)}€<<<`)
        } else{
            console.log(`\n`,line,`\n this is a new accout; please add your name\n`)
        }
    }
    close = function(){
        oldHIstory = history
        history = []
        info = null
        return oldHIstory
    }

}

startAccount("pedro")

add(10)
withdraw(10)

withdraw(10)
withdraw(10)
tot()

add(100000)

tot()
close()

tot()