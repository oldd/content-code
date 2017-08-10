// 	big leap:  closures  
// 	
//	'context' describles how one variable name can have several meanings depending on where it is used.
// 	closures are when a function 'remembers' the context where it was created, even after it has left.
//  you can think of it a little like a function having default arguments


// your current orientation
// 0 = north
var orientation = 0;

// cardinal directions do not change
// they are not defined in a closure
var north = function() {console.log('north');};
var south = function() {console.log('south');};
var east = function() {console.log('east');};
var west = function() {console.log('west');};

// relative directions change
// they are defined in a closure
var right = function() {};
var left = function() {};
var straight = function() {};
var back = function() {};

// turn - changes which way is straight
//		turned: 'l' is left, 'r' is right
//		orientation: player's current orientation
//		returns a new orientation and closes over relative directions
var turn = function(turned, oldOrient) {
	var newOrient;
	var cardinals = ['north', 'east', 'south', 'west'];
	if (turned == 'l') {
		newOrient = oldOrient - 1;
		console.log('\nturning left');
	}
	else if (turned == 'r') {
		newOrient = oldOrient + 1;
		console.log('\nturning right');
	}
	else {
		newOrient = oldOrient;
		console.log('\nsucker');
	};

	// *********************************    //
	// locally defining s,r,l,b
	var s = cardinals[(0 + newOrient)%4];
	var r = cardinals[(1 + newOrient)%4];
	var l = cardinals[(2 + newOrient)%4];
	var b = cardinals[(3 + newOrient)%4];
	// closing functions over the scope inside 'turn'
	straight = function () {console.log('straight: ' + s)};
	right = function () {console.log('right: ' + r)};
	left = function () {console.log('left: ' + l)};
	back = function () {console.log('back: ' + b)};
	// *******************************   //

	return newOrient;
}; 

// ------------------------------------------------------ //


// turn is a pure function
// orientation needs to be reassigned at every turn

orientation = turn(4, orientation);
straight();
orientation = turn('r', orientation);
straight();
orientation = turn('r', orientation);
straight();
orientation = turn('r', orientation);
straight();
orientation = turn('l', orientation);
straight();
orientation = turn('foot', orientation);
straight();
console.log('\n');
straight();
right();
back();
left();








