// to manipulate and protect the app's data
var model = {
	nextPlayer: true,  // keep track of player turns
	boardState: [   // remember the plays made
			[null, null, null],
			[null, null, null],
			[null, null, null]  
		],  
	updateData: function(box, boardNow, playerNow) {  // to save player moves and move the game forward
		// if move is valid, 
		// save it to the gameboard and update playerstate.  
		// else alert
		return undefined;
	},
	deleteEverything: function() {
		///
		return 'success';
	}
};


// to manipulate the DOM with fresh data
var view = {
	populateBoard: function(boardNow) {  // so players can see what they've done
		// take in the boardState and draw it onto the DOM tic tac toe board
		return undefined;
	}
};

// handle 'game play'.
var controller = {
	play: function(box) {  //  when a user clicks the board, the app does the right thing
		// calls model.update with the newest play. then calls view to draw the new board
		// ifasdofpobav
		return undefined;
	}
};
