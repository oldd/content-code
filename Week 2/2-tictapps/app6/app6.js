// this is kinna awkward between the model and controller
// why can't the model handle its own properties?
// that's the point anyway, for the model to handle the data

var model = {
	// model stuff.  
	// stores and modifies the data
	nextPlayer: true,
	boardState: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
	lastMove: [000, 000],
	updateData: function(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(this.boardState[row][column] == null) {	
			if(this.nextPlayer) {
				this.boardState[row][column] = 'x';
			} else {
				this.boardState[row][column] = 'o';
			}
			//this.lastMove = [row, column];
			this.nextPlayer = !this.nextPlayer;
		} else {
			alert('grow up. you can\'t do that')
		};
		return this.boardState;
	}
	// clearBoard: function() {
	// 	for(var i = 0; i < 3; i++) {
	// 		for(var j = 0; j < 3; j++) {
	// 			this.boardState[i][j] = null;
	// 		}
	// 	}
	// 	return this.boardState;
	// },
	// undoMove: function() {
	// 	// needs to undo move
	// 	// we can remember lastMove made and undo it in the boardState
	// 	var row = this.lastMove[0];
	// 	var column = this.lastMove[1];
	// 	this.boardState[row][column] = null;
	// 	return this.boardState;
	// 	// store a copy of the board after every move
	// }
};

var view = {
	// view stuff
	// is passed data and makes it visible to the user
	populateBoard: function(boardNow) {
		var board = document.getElementById('ticTacBoard').children[0].children;
		var row;
		var column;
		for(var i = 0; i < 3; i++) {
			row = board[i].children;
			for(var j = 0; j < 3; j++) {
				column = row[j];
				column.innerHTML = boardNow[i][j];
			};
		};
	}
};

var controller = {
	// controller stuff
	// connects to the dom and calls the model and view
	play: function(box) {
		// model.nextPlayer = false;  --- NEVER
		var boardNow = model.updateData(box);
		view.populateBoard(boardNow); 
	}
	// clearBoard: function(){
	// 	var boardNow = model.clearBoard();
	// 	view.populateBoard(boardNow);
	// },
	// undoMove: function() {
	// 	// make a call to model to undo last move
	// 	var boardNow = model.undoMove();
	// 	// make a call to view to redraw board
	// 	view.populateBoard(boardNow);		
	// }
};





















