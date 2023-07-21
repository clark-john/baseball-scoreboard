import { getGameState } from "@utils";
import { defineStore } from "pinia";
import { ref } from "vue";

interface Bases {
	first: boolean;
	second: boolean;
	third: boolean;
}

type ObjNumString = { [key: number]: string };

export const useBases = defineStore("bases", () => {
	const obj = {
		1: "first",
		2: "second",
		3: "third"
	};
	const gameState = getGameState();
	const basesInit = {
		first: false,
		second: false,
		third: false
	};

	for (const x of gameState.basesLoaded) {
		basesInit[(obj as ObjNumString)[x as keyof ObjNumString] as keyof Bases] =
			true;
	}

	const bases = ref(basesInit);
	function loadBase(baseNumber: 1 | 2 | 3) {
		const key = obj[baseNumber] as keyof Bases;
		const val = bases.value[key];
		bases.value[key] = val ? false : true;
	}
	function clearBases() {
		for (const x of Object.keys(bases.value)) {
			bases.value[x as keyof Bases] = false;
		}
	}
	return { bases, loadBase, clearBases };
});
