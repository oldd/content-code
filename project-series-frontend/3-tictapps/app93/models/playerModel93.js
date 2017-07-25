var playerModel = {
	name: 'playerModel',
	nextPlayer: true,
	toggleNextPlayer: function() {
 		this.nextPlayer = !this.nextPlayer;
	},
	readPlayerState: function() {
		return this.nextPlayer;
	}
};