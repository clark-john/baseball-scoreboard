<script lang="ts" setup>
import { useOuts } from "@stores";

const { firstOut, secondOut, clearOuts } = useOuts();
</script>
<template>
	<div class="main">
		<div class="control-text">Outs</div>
		<div class="actual-outs">
			<div class="outs">
				<button @click="firstOut">1st Out</button>
				<button @click="secondOut">2nd Out</button>
			</div>
			<button @click="clearOuts">Reset Outs</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

button {
	@include normalButton;
}

.main {
	.actual-outs {
		.outs {
			display: flex;
			column-gap: 9px;
		}
		display: inherit;
		justify-items: inherit;
		row-gap: 8px;
	}
	display: grid;
	justify-items: center;
}
</style>
