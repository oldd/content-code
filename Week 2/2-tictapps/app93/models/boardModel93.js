var model = {
	name: 'boardModel',
	boardState: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
	// keep an eye on the relationship between this and controller.play	
// its a proto-callback situation
	updateData: function(box, playerNow) {
		var err;
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(this.boardState[row][column] == null) {	
			if(playerNow) {
				this.boardState[row][column] = 'x';
			} else {
				this.boardState[row][column] = 'o';
			};
			err = false;
		} else {
			err = true;
		};
		return err;
	},
	readBoardState: function() {
		return this.boardState;
	}
};