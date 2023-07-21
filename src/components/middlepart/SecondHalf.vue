<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useInning, useCount } from "@stores";

const { inningNumber, tob } = storeToRefs(useInning());
const { ball, strike } = storeToRefs(useCount());
</script>

<template>
	<div class="main">
		<div class="inning-count">
			<InningTriangle :inverted="tob === 'top'" />
			{{ inningNumber }}
		</div>
		<div class="balls-strikes">{{ ball }} - {{ strike }}</div>
	</div>
</template>

<style lang="scss" scoped>
.main {
	display: grid;
	font-family: "Franklin Gothic Demi";
	justify-items: center;
	margin-top: 80px;
}

.inning-count {
	display: flex;
	align-items: center;
	gap: 14px;
}

.inning-count,
.balls-strikes {
	font-size: 40px;
}
</style>
