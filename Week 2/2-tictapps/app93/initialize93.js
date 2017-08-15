function initializeApp() {
	controller.addModel(boardModel);
	controller.addModel(playerModel);
	controller.setView(gameplayView);
	initialzeView.buildBoard();
	console.log('hi');
};