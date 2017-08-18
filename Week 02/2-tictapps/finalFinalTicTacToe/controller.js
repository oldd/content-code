var controller = {
	view: {},
	models: {},
	setView: function(newView) {
			this.view = newView;
		},	
	addModel: function(newModel) {
			this.models[newModel.name] = newModel;
		},	
	// defines callback
	play: function(box) {
			var row = box.parentElement.getAttribute('row');
			var column = box.getAttribute('column');
			var nextPlayer = this.models.playerState.getNextPlayer();
			// it's kind of really important that the callback is an arrow function
			this.models.boardState.addMove(row, column, nextPlayer, (err) => {
				if(err) {
					alert('foo\'.  you cant do that.');
				} else {
					var newBoard = this.models.boardState.getBoardState();
					this.view.repopulateBoard(newBoard);
					this.models.playerState.togglePlayer();		
				}
			});
		}
};

