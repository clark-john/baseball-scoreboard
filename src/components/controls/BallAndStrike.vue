<script lang="ts" setup>
import { useCount, Count } from "@stores";

const { reset, increment, decrement } = useCount();
</script>

<template>
	<div class="main">
		<div class="control-text">Balls and Strikes (Count)</div>
		<div class="balls">
			Ball
			<div class="buttons">
				<button @click="increment(Count.Ball)">+</button>
				<button @click="decrement(Count.Ball)">-</button>
			</div>
		</div>
		<div class="strikes">
			Strike
			<div class="buttons">
				<button @click="increment(Count.Strike)">+</button>
				<button @click="decrement(Count.Strike)">-</button>
			</div>
		</div>
		<button @click="reset">Reset</button>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

.main {
	display: grid;
	justify-items: center;
	gap: 6px;
}

.buttons,
.balls,
.strikes {
	display: flex;
	align-items: center;
}

.buttons {
	gap: 6px;
}

.balls,
.strikes {
	gap: 10px;
}

button {
	@include normalButton;
}
</style>
