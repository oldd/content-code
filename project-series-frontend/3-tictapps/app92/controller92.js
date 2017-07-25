var controller = {
	// controller stuff
	// connects to the dom and calls the model and view
	models: {},
	view: {},
	addModel: function(newModel) {
		this.models[newModel.name] = newModel;
	},
	setView: function(newView) {
		this.view = newView;
	},
	// keep an eye on the relationship between this method and boardmodel.updateData
	// it's a proto-callback situation
	play: function(box) {
		var nowPlayer = this.models.playerModel.readData();
		var dbError = this.models.boardModel.updateData(box, nowPlayer);
		if(dbError) {
			var boardNow = model.readBoardState;
			this.view.populateBoard(boardNow); 
			this.models.playerModel.toggleNextPlayer();
		} else {
			alert('grow up. you can\'t do that');
		};
	}
};
