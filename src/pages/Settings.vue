<script lang="ts" setup>
import { ref } from "vue";
import ArrowBackIosFilled from "@vicons/material/ArrowBackIosFilled";
import { getSettingsChannel } from "@utils";

const orig = localStorage.getItem("settings");
const settings = ref(JSON.parse(localStorage.getItem("settings")!));
const hasChanges = ref(true);

function handleSaveButton() {
	hasChanges.value = JSON.stringify(settings.value) === orig;
}

const channel = getSettingsChannel();

function saveSettings() {
	const val = settings.value;
	localStorage.setItem("settings", JSON.stringify(val));
	channel.postMessage(JSON.parse(JSON.stringify(val)));
	alert("Saved");
}
</script>

<template>
	<MarginWrapper margin="20px" class="main">
		<router-link to="/">
			<Icon size="40">
				<ArrowBackIosFilled />
			</Icon>
		</router-link>
		<div class="settings-text">Settings</div>
		<MarginWrapper margin="3rem 3.5rem" style="width: 100%">
			<div class="inputs">
				<div class="team-name">
					Home Team Name:
					<input
						type="text"
						v-model="settings.homeTeam"
						maxlength="4"
						@input="handleSaveButton"
					/>
					<br />
				</div>
				<div class="team-name">
					Away Team Name:
					<input
						type="text"
						v-model="settings.awayTeam"
						maxlength="4"
						@input="handleSaveButton"
					/>
					<br />
				</div>
			</div>
			<button @click="saveSettings" :disabled="hasChanges">Save</button>
		</MarginWrapper>
	</MarginWrapper>
</template>

<style scoped lang="scss">
@use "@styles/button" as *;

button {
	@include normalButton;
	margin-block: 1rem;
}

.inputs {
	flex-direction: column;
	display: flex;
	gap: 10px;
}

.team-name {
	font-size: 1.5rem;
	input {
		font-size: 1.25rem;
		padding: 3px 10px;
		font-family: Inter, sans-serif;
		font-weight: 500;
	}
	display: flex;
	gap: 1rem;
	align-items: center;
}

.main {
	display: grid;
	grid-template-columns: 45% 55%;
	align-items: center;
	.settings-text {
		font-size: 1.5rem;
	}
}
span.xicon {
	color: #fff;
	margin-inline: 1rem;
}
</style>
