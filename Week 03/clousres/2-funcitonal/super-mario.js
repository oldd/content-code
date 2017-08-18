'use strict';
//Global variable
function nameChange(callback){
  var myName = 'alex';
  return callback(myName);
}

console.log(nameChange(switchName));


var once = function(func){
  var ran = false;
  return function(){
    if (!ran){
      ran = true;
      func();
    } else {
      return;
    }
  }
}

var  myFunc = function(){
  console.log('runninnggg!!');
}

myFunc();


//NUMBER 1

//sets first name
var setFirstName = function(firstName){
  //inner function allows us to alter last name
  var fullName = function(lastName){
    //note that the firstName has been saved
    //for use in our inner function
    console.log(firstName + ' ' + lastName);
  };
  return fullName; //returns inner function

};

//simplified NUMBER 1
function yourName(firstName){
  return function(lastName){
    console.log(firstName + ' ' + lastName);
  };
}

var myLastName = setFirstName('Alex');
console.log(myLastName);
console.log(myLastName('Hawkins'));

var first = yourName('Zander');
first('Zee');


//NUMBER 2
function sum (num1){
  return function(num2){
    return function(num3){
      return num1 + num2 + num3;
    }
  }

}
console.log(sum(10)(20)(30));


//NUMBER 3

function switchName(name){
  var favName = 'john';
  return favName;
}

//NUMBER 4

var myToaster = function(){
  //private properties
  var batteryLife = 100;
  function useBattery(numGuests){
    var batteryUse = numGuests * 10;
    if (batteryLife - batteryUse > 0){
      batteryLife -= batteryUse;
      console.log('You have ' + batteryLife + ' minutes of toasting time left.');
    } else {
      console.log('Too many guests! Tone the toast party down brah!');
    }
  }
  //public properties
    return {
      id: 1234140,
      name: 'Cuisinart 12-Slice Toaster',
      color: 'black',
      guests : function(numGuests){
        useBattery(numGuests);
      }
    };

  };
var toast = myToaster();
toast.guests(8);
toast.guests(1);
toast.guests(1);

//NUMBER 5
var superMario = function () {
  //private properties
  var lives = 3;
  var timeLimit = 100;
  var points = 200;
  var powers = { fireball: false, swim: false };
  function kill(){
    lives--;
    console.log('You have ' + lives + ' lives left!');
  }
  function xLife(){
    lives++;
    console.log('You have ' + lives + ' lives left!');
  }
  function checkPowers(power){
    (powers[power]) ? console.log('You have the power!') : console.log('You don\'t have this power yet!');
  }
  function collectCoins(amount){
     points += amount;
     console.log('You now have ' + points + ' points!');
  }
  function addPower(power){
    if (powers[power]){
      console.log('You already have ' + power + ' power.');
    } else if (power === 'fireball' && !powers[power] && points >= 400){
      console.log('You successfully added fireball power');
      points -= 400;
      powers[power] = true;
      console.log('You now have ' + points + ' points!');
    } else {
      console.log('You need ' + (400 - points) + ' to add fireball');
    }
  }

  //public properties
  return {
    killed: function(){ kill(); },
    extraLife: function() { xLife(); },
    crossRiver: function(power) { checkPowers(power); },
    collectCoins: function(coinAmount) { collectCoins(coinAmount); },
    killDragon: function(power) { checkPowers(power); },
    addPower: function(power) { addPower(power); }
  };

};

var mario = superMario();
mario.killed();
mario.extraLife();
mario.crossRiver('swim');
mario.killDragon('fireball');
mario.collectCoins(400);
mario.addPower('fireball');
mario.addPower('fireball');