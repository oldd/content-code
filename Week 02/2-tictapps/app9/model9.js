var model = {
	// model stuff.  
	// stores and modifies the data
	playerState: true,
	boardState: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
	updateData: function(box) {
		var row = box.parentElement.getAttribute('row');
		var column = box.getAttribute('column');
		if(this.boardState[row][column] == null) {	
			if(this.playerState) {
				this.boardState[row][column] = 'x';
			} else {
				this.boardState[row][column] = 'o';
			}
			this.playerState = !this.playerState;
		} else {
			alert('grow up. you can\'t do that')
		};
	},
	readBoardState: function() {
		return this.boardState;
	},
	readPlayerState: function() {
		return this.playerState;
	}
};

