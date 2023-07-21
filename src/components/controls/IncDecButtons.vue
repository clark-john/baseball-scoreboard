<script lang="ts" setup>
import { useTeamScores } from "../../stores/teamScoreStore";

const { increment, decrement } = useTeamScores();

const { teamType } = defineProps<{
	teamType: "home" | "away";
}>();
</script>

<template>
	<div>
		<button @click="increment(teamType)">+1</button>
		<button @click="decrement(teamType)">-1</button>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

div {
	display: flex;
	column-gap: 8px;
}

button {
	@include normalButton;
}
</style>
