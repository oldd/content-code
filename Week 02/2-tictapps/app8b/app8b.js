// this is awkward.
// how do I put them in there?

// in a separate function!
// it's purpose is to initialize the app
// 		... but where to call this function?

// try solving this on your own first.
// and answer is in 8c

function initializeApp() {
	controller.setModel(model);
	controller.setView(view);
};

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
		var boardNow = model.readBoardState;
		this.view.populateBoard(boardNow); 
	}
};

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

