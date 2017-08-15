var initializeView = {	
	buildBoard: function(cb) {
		var board = document.getElementById('ticTacBoard');
		var row;
		var cell;
		for(var i = 0; i < 3; i++) {
			row = board.insertRow(i);
			row.setAttribute('row', i);
			for(var j = 0; j < 3; j++) {
				cell = row.insertCell(j); 
				// why not set it to null directly?
				// because what if you want to finish a saved game?
				cell.innerHTML = null;
				cell.setAttribute('column', j);
				cell.setAttribute('onclick', 'controller.play(this)');
			};
		};
	}
}