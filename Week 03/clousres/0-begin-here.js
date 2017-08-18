//==========================VARIABLE SCOPE==============
function() {
  var a = 1;
  console.log(a); // works
}
console.log(a); // fails

var a = 1;
function() {
  console.log(a); // works
}
console.log(a); // works
//==========================Lexical SCOPE===============
function init() {
  var name = 'Luke Skywalker'; // name is a local variable created by init
  function displayHero() { // displayHero() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayHero();
}
init();
var myfunc = init();
//==========================CLOSURE=====================

function init() {
  var name = 'Han Solo';
  function displayHero() {
    alert(name);
  }
  return displayHero;
}

// remembers it's roots
var myFunc = init();
myFunc();

// lost and orphaned - name is undefined
function displayHero() {
  alert(name);
}
displayHero();

//======================================================
function addMe(x){
	return function(y){
		return x + y
    }
}
//Call it:
//1)
  addMe(2)(3) --> //5
//2)
  var add2 = addMe(2);
  add2(3) --> //5
//======================================================
outer = function() {
  var a = 1;
  var inner = function() {
    console.log(a);
  }
  return inner; // this returns a function
}

var fnc = outer(); // execute outer to get inner
fnc();
//In the above example, the variable a is private to the function
//outer.The reason we have it available to the inner function is
//that we assigned the outer function to a newly created variable
//and then we run it again, as a result we enclose the declared
//variables and make them available to the inner function.
//======================================================
function makeCounter () {
  var count = 0;
  return function () {
    count += 1;
    return count;
  }
}

var x = makeCounter();
x();
x();
//What we see here is simple.The count variable is declared within
//makeCounter,as a result this belongs to the lexical scope and
//whenever we call the inner function to return a value, it has to
//hold the value of the count and not assign it to the garbage collection
//since the count variable is undefined in the Global Scope and available
//only within the lexical.

//==========================CURRYING====================
//Currying is the way to construct functions that either will get
//and deal with all the arguments of a function at once or they
//can be constructed in a way that would make the function wait
//for the next set of arguments before deliver a result.
var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello World", "STUDENTS");
//The above example runs the moments we pass the 2 args and run the
//function.
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};
//Here i have 2 ways to run this.
//1)
  greetCurried("Hello")("Evan")
//2)
  var greet = greetCurried("Hello there")
  greet; --> //here i get the functio that is waiting to take parameters
  greet("Evan") --> //here the waiting inner function runs and returns the log


//==========================EX1=========================
//consider that u created some buttons and u have more than 2 buttons
//in the node list.
var nodes = document.getElementsByTagName('button');
for(var i = 0; i < nodes.length; i++){
   nodes[i].addEventListener('click', function() {
      console.log('You clicked element #' + i);
   });
}
//======================================================
for(var i = 0; i < 10; i++){
  setTimeout(function(){
    console.log(i)
  }, 100)
} //What will be the result, why?how to fix it?
//======================================================
//==========================EX2=========================
//event loop
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//======================================================
//==========================EX3=========================
//==========================QUICK SHOT==================
var a = 12;
(function() {
  alert(a);
})();
//======================================================
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();
//======================================================
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();
//======================================================
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
//======================================================
var a = 10;
var x = (function() {
  (function() {
    a = 12; // <<< look carefully at this line.
  })();
  return (function() {
    alert(a);
  });
})();
x();
//======================================================
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();


//======================================================
//===============Linear Exercise========================
//======================================================
// 0. Write a function that retuns "Hello World!"
// i.e., Q0() returns "Hello World"
// 1. Write a function that returns number 7.
//TODO

// 2. Write a function that returns the same number that takes as a parameter
// i.e., Q2(7) returns 7.
//TODO


// 3. Write a function that returns the a function that returns 7.
// i.e., Q3()() returns 7
//TODO


// 4. Write a function that returns the a function that returns the number that
// was passed to the first function. i.e., Q3(7)() === 7.
//TODO


// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, i.e., Q5(7)() === 8.
//TODO


// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, but increases by one each
// time it is called, i.e.,
// var fn = Q5(7);
// fn() //returns 8.
// fn() //returns 9.
//TODO


// 6. Write a function that returns a function that returns one more than the
// number it returned last time, starting with 1. i.e.,

// var fn = Q5();
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.

//TODO

