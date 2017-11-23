window.onload = function() {
	var game = new Phaser.Game(1100, 600, Phaser.CANVAS, '', null, false, true, {"arcade":true});

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Game", Game);

	game.state.start("Game");
};
