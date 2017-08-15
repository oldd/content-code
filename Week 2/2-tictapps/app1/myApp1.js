// keep track of who's turn it is
var nextPlayer = true;


// store the state of the game
var boardState = [
		[null, null, null],
		[null, null, null],
		[null, null, null]
	];

// allows a user to place a new move and see the result
function play(box) { // ->  DOM element.  cell in the board
	// calls updateData with box, calls populateBoard
	return undefined;
};

// keep data up to date with game play
function updateData(box) { // ->  DOM element.  cell in the board
	//check if the given cell is null.  
	//if it is, 
	//	place the move and switch to next player.  
	//else, 
	//	alert.  
	return undefined;
};

// so users can see the moves they've made
function populateBoard() {
	// draw boardState onto the DOM table
	return undefined;
};