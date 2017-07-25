// The purpose of app structures is to separate all
// your code into different files depending on it's 
// role in your app.
// this makes maintenance, upgrades, and bug fixing easier.

// our first separation is to split 'play'.
// right now 'play' modifies the data (board and player)
// AND changes what you see.
//    let's fix that

var nextPlayer = true;

var boardState = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
	];

function play(box) {
	updateData(box);
	populateBoard(); 
};

function updateData(box) {
	var row = box.parentElement.getAttribute('row');
	var column = box.getAttribute('column');
	if(boardState[row][column] == null) {	
		if(nextPlayer) {
			boardState[row][column] = 'x';
		} else {
			boardState[row][column] = 'o';
		}
		nextPlayer = !nextPlayer;
	} else {
		alert('grow up. you can\'t do that')
	};
}; 

function populateBoard() {
	var board = document.getElementById('ticTacBoard').children[0].children;
	var row;
	var column;
	for(var i = 0; i < 3; i++) {
		row = board[i].children;
		for(var j = 0; j < 3; j++) {
			column = row[j];
			column.innerHTML = boardState[i][j];
		};
	};
};














