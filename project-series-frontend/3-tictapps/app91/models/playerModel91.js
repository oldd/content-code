var playerModel = {
	name: 'playerModel',
	nextPlayer: true,
	toggleNextPlayer: function() {
 		this.nextPlayer = !this.nextPlayer;
	},
	readData: function() {
		return this.nextPlayer;
	}
};