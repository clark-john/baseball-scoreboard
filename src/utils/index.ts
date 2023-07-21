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
	return JSON.parse(localStorage.getItem("gameState")!);
}
