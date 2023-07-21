import { getGameState } from "@utils";
import { defineStore } from "pinia";
import { ref } from "vue";

type HomeOrAway = "home" | "away";

export const useTeamScores = defineStore("teamScores", () => {
	const gameState = getGameState();
	const { homeScore: hscore, awayScore: ascore } = gameState;

	const homeScore = ref(hscore);
	const awayScore = ref(ascore);

	const detectScoreRef = (hora: HomeOrAway) => {
		return hora === "home" ? homeScore : awayScore;
	};

	const increment = (hora: HomeOrAway) => {
		detectScoreRef(hora).value++;
	};
	const decrement = (hora: HomeOrAway) => {
		const score = detectScoreRef(hora);
		if (score.value > 0) {
			score.value--;
		}
	};
	const reset = (hora: HomeOrAway) => {
		detectScoreRef(hora).value = 0;
	};

	return {
		homeScore,
		awayScore,
		increment,
		decrement,
		reset
	};
});
