import { defineStore } from "pinia";
import { ref } from "vue";
import { getGameState } from "@utils";

export const useInning = defineStore("inning", () => {
	const gameState = getGameState();
	const { number, half } = gameState.inning;

	const inningNumber = ref(number);
	const tob = ref<TopOrBottom>(half);

	const previous = () => {
		const val = inningNumber.value;
		if (val > 1) {
			inningNumber.value--;
		}
	};
	const next = () => {
		const val = inningNumber.value;
		if (val < 9) {
			inningNumber.value++;
		}
	};
	const toggleTopOrBottom = () => {
		tob.value = tob.value === "top" ? "bottom" : "top";
	};

	return { inningNumber, tob, previous, next, toggleTopOrBottom };
});
