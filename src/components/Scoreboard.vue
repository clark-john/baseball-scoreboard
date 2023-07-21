<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { getSettings, getSettingsChannel } from "@utils";
import { useTeamScores } from "@stores";
import { storeToRefs } from "pinia";

const sb = ref<HTMLElement | null>();

// large scoreboard for actual display and non-large for controlling purposes
const { large = false } = defineProps<{
	large?: boolean;
}>();

watchEffect(() => {
	const sbVal = sb.value;
	if (sbVal) {
		if (large) sbVal.classList.add("large-sb");
	}
});

const h = ref(getSettings());
const { homeScore, awayScore } = storeToRefs(useTeamScores());

const channel = getSettingsChannel();

channel.onmessage = message => {
	const { homeTeam: home, awayTeam: away } = message.data as Settings;
	h.value.homeTeam = home;
	h.value.awayTeam = away;
};
</script>

<template>
	<div class="main" ref="sb">
		<Scorebox :score="homeScore" :name="h.homeTeam" />
		<MiddlePart :large="large" />
		<Scorebox :score="awayScore" :name="h.awayTeam" />
	</div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@colors" as c;

.main {
	background-color: c.$scoreboard-bg;
	display: flex;
	justify-content: space-between;
	width: 50%;
}

.large-sb {
	width: 80%;
}

$screens: (
	1418px: 70%,
	845px: 90%
);

@each $px in map.keys($screens) {
	@media only screen and (max-width: $px) {
		.main {
			width: map.get($screens, $px);
		}
	}
}
</style>
