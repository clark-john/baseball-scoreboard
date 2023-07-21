import { defineStore } from "pinia";
import { ref } from "vue";
import { getGameState } from "@utils";

export enum Count {
	Ball = 1,
	Strike = 2
}

export const useCount = defineStore("count", () => {
	const gameState = getGameState();

	const { balls, strikes } = gameState.count;

	const ball = ref(balls);
	const strike = ref(strikes);

	function increment(count: Count) {
		if (count === Count.Ball) {
			if (ball.value < 4) {
				ball.value++;
			}
		} else {
			if (strike.value < 3) {
				strike.value++;
			}
		}
	}

	function greaterThanZero(val: number) {
		return val > 0;
	}

	function decrement(count: Count) {
		if (count === Count.Ball) {
			if (greaterThanZero(ball.value)) {
				ball.value--;
			}
		} else {
			if (greaterThanZero(strike.value)) {
				strike.value--;
			}
		}
	}

	function reset() {
		ball.value = 0;
		strike.value = 0;
	}

	return { ball, strike, increment, decrement, reset };
});
