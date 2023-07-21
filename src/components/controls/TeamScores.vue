<script lang="ts" setup>
import { useTeamScores } from "@stores";

const { reset } = useTeamScores();
</script>

<template>
	<div class="team-scores">
		<div class="home-team">
			<div class="control-text">Home Team</div>
			<IncDecButtons teamType="home" />
			<button class="reset" @click="reset('home')">Reset</button>
		</div>
		<div class="away-team">
			<div class="control-text">Away Team</div>
			<IncDecButtons teamType="away" />
			<button class="reset" @click="reset('away')">Reset</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

button {
	@include normalButton;
}

.team-scores {
	display: flex;
	gap: 1.5rem;
	.home-team,
	.away-team {
		display: grid;
		justify-items: center;
		.reset {
			justify-self: stretch;
		}
		row-gap: 8px;
	}
}
</style>
