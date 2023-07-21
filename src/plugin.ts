import { PiniaPluginContext } from "pinia";
import {
	getGameState //, getUpdateDetailsChannel
} from "@utils";
import { keys } from "lodash";

interface StoreObj {
	[key: string]: () => void;
}

const gameState = getGameState();

function setStateToStorage(obj: Record<string, any>) {
	localStorage.setItem("gameState", JSON.stringify({ ...gameState, ...obj }));
}

export function ScoreboardStatePersist(context: PiniaPluginContext) {
	// const channel = getUpdateDetailsChannel();
	context.store.$onAction(({ after, store }) => {
		after(() => {
			// channel.postMessage("update");
			const storeObj: StoreObj = {
				teamScores: () => {
					setStateToStorage(store.$state);
				},
				inning: () => {
					const state: { inning: Partial<GameState["inning"]> } = {
						inning: {}
					};
					state.inning.number = store.$state.inningNumber;
					state.inning.half = store.$state.tob;
					setStateToStorage(state);
				},
				outs: () => {
					let outs = 0;
					const someOuts = store.$state.outs;
					keys(someOuts).forEach(x => {
						if (someOuts[x]) {
							outs++;
						}
					});
					setStateToStorage({ outs });
				},
				count: () => {
					const { ball, strike } = store.$state;
					setStateToStorage({ count: { balls: ball, strikes: strike } });
				},
				bases: () => {
					const bases: number[] = [];
					const b = store.$state.bases;
					keys(b).forEach((val, i) => {
						if (b[val]) {
							bases.push(i + 1);
						}
					});
					setStateToStorage({ basesLoaded: bases });
				}
			};
			const func = storeObj[store.$id as keyof StoreObj];
			(func || (() => {}))();
			console.log("action finished");
		});
	});
}
