import { defineStore } from "pinia";
import { ref } from "vue";
import { getGameState } from "@utils";
import { keys, range } from "lodash";

interface Outs {
	first: boolean;
	second: boolean;
}

export const useOuts = defineStore("outs", () => {
	const gameState = getGameState();

	const outsInit = {
		first: false,
		second: false
	};

	for (const x of range(gameState.outs)) {
		outsInit[keys(outsInit)[x] as keyof Outs] = true;
	}

	const outs = ref<Outs>(outsInit);

	function firstOut() {
		const val = outs.value.first;
		outs.value.first = !val ? true : false;
	}

	function secondOut() {
		const val = outs.value.second;
		if (!outs.value.first) {
			alert("First out should be first");
		} else {
			outs.value.second = !val ? true : false;
		}
	}

	function clearOuts() {
		outs.value.first = false;
		outs.value.second = false;
	}

	return { outs, firstOut, secondOut, clearOuts };
});
