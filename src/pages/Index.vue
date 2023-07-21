<script setup lang="ts">
import SettingsFilled from "@vicons/material/SettingsFilled";
</script>

<template>
	<div>
		<router-link to="/settings">
			<Icon tag="i" size="48">
				<SettingsFilled />
			</Icon>
		</router-link>
		<MarginWrapper margin="1rem 0">
			<WebTitle />
			<div class="center">
				<Scoreboard />
			</div>
			<a href="#/full" target="_blank" class="center">
				Go to larger view of scoreboard
			</a>
			<Controls />
		</MarginWrapper>
	</div>
</template>

<style lang="scss" scoped>
@use "@colors" as *;

a {
	&:any-link {
		color: $link-color;
	}
	text-decoration: none;
	margin-block: 1.5rem;
}

i {
	color: white;
	position: absolute;
	right: 1.5rem;
	top: 1rem;
}
</style>
