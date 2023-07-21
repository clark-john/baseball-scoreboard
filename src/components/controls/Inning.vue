<script lang="ts" setup>
import { SkipNextFilled } from "@vicons/material";
import { useInning } from "@stores";

const { toggleTopOrBottom, next, previous } = useInning();
</script>

<template>
	<div class="inning">
		<div class="control-text">Inning</div>
		<div class="buttons">
			<div class="inning-count">
				<button @click="next">+</button>
				<button @click="previous">-</button>
				<button>
					<Icon size="20">
						<SkipNextFilled />
					</Icon>
				</button>
			</div>
			<button @click="toggleTopOrBottom">Toggle Top/Bottom</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

button {
	@include normalButton;
}

.inning {
	display: grid;
	gap: 4px;
	justify-items: center;
}

.buttons {
	.inning-count {
		display: flex;
		gap: 8px;
	}
	display: grid;
	gap: 10px;
	justify-items: center;
}

span.xicon {
	display: flex;
	align-items: center;
}
</style>
