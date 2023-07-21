const gameStateVar: GameState = {
	homeScore: 0,
	awayScore: 0,
	inning: {
		number: 1,
		half: "top"
	},
	count: {
		balls: 0,
		strikes: 0
	},
	basesLoaded: [],
	outs: 0
};

function createBc(name: string) {
	const bc = new BroadcastChannel(name);
	window.onunload = () => {
		bc.close();
	};
	return bc;
}

export function getUpdateDetailsChannel() {
	return createBc("updateDetails");
}
export function getSettingsChannel() {
	return createBc("settings");
}

export function getSettings(): Settings {
	return JSON.parse(localStorage.getItem("settings")!);
}

export function getGameState(): GameState {
	if (!localStorage.getItem("gameState")) {
		localStorage.setItem("gameState", JSON.stringify(gameStateVar));
		return gameStateVar;
	}
	return JSON.parse(localStorage.getItem("gameState")!);
}
