var controller = {
	// controller stuff
	// connects to the dom and calls the model and view
	model: {},
	view: {},
	setModel: function(newModel) {
		this.model = newModel;
	},
	setView: function(newView) {
		this.view = newView;
	},
	play: function(box) {
		model.updateData(box);
		var boardNow = model.readBoardState();
		this.view.populateBoard(boardNow); 
	}
};
