// it's one small step ...

var model = {
	// model stuff.  
	// stores and modifies the data
	nextPlayer: true,
	boardState: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
	updateData: function(box, boardNow, playerNow) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(boardNow[row][column] == null) {	
			if(playerNow) {
				boardNow[row][column] = 'x';
			} else {
				boardNow[row][column] = 'o';
			}
			playerNow = !playerNow;
		} else {
			alert('grow up. you can\'t do that')
		};
	}
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
		model.updateData(box, model.boardState, model.nextPlayer);
		view.populateBoard(model.boardState); 
	}
};
