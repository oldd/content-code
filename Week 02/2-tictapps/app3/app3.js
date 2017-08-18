// these methods aren't so pure.  
// they're using a lot of values they aren't passed
// it's not such a big deal since they're only using their
// own properties, but it'll make the next step simpler.

var ticTappToe = {
	// this is like this because javascript is annoying.
	// later it will just be true or false again.  ignore this
	nextPlayer: {state:true},

	boardState: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],

	play: function(box) {
		this.updateData(box, this.boardState, this.nextPlayer);
		this.populateBoard(this.boardState); 
	},

	updateData: function(box, boardNow, playerNow) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(boardNow[row][column] == null) {	
			if(playerNow.state) {
				boardNow[row][column] = 'x';
			} else {
				boardNow[row][column] = 'o';
			}
			playerNow.state = !(playerNow.state);
		} else {
			alert('grow up. you can\'t do that')
		};
	},

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
