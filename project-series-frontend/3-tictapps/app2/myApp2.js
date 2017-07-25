
// this ticTappToe exists to bundle everything together 
// and to protect the global scope
var ticTappToe = {
	nextPlayer: true,  // to keep track of who's turn it is
	boardState: [			// to store the state of the board
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
	// provides a predescribed user interaction with the data - add a new move and see the new data
	play: function(box) {  // a cell from your DOM 
		// to call updateData then populateBoard
		return undefined;
	},
	// to allow the user to change the app's data
	updateData: function(box) {  // a cell from your DOM
		//if it's a valid move - 
		//	to place the new move in the db(array) 
		//	and change player.  
		//else 
		//	alert. 
		return undefined;
	},
	// so users can see their moves		
	populateBoard: function() {
		// to draw the boardState into the DOM
		return undefined;
	}
};