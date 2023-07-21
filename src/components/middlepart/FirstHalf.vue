<script lang="ts" setup>
import { useOuts, useBases } from "@stores";
import { storeToRefs } from "pinia";

const { outs } = storeToRefs(useOuts());
const { bases } = storeToRefs(useBases());
</script>

<template>
	<div class="main">
		<div class="bases">
			<div class="base" :class="bases.first ? 'loaded' : ''"></div>
			<div class="base" :class="bases.second ? 'loaded' : ''"></div>
			<div class="base" :class="bases.third ? 'loaded' : ''"></div>
		</div>
		<div class="outs">
			<div class="out" :class="outs.first ? '' : 'blank'"></div>
			<div class="out" :class="outs.second ? '' : 'blank'"></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@colors" as c;

.main {
	display: grid;
	margin-top: 80px;
	gap: 30px;
	justify-items: center;
}

.bases {
	display: flex;
	rotate: 180deg;
	transform-origin: center;
	// margin-top: -50px;
}

.outs {
	display: flex;
	gap: 10px;
}

.out {
	width: 20px;
	height: 20px;
	background-color: c.$highlight;
	border-radius: 100%;
	&.blank {
		background-color: #fff;
	}
	transition: background-color 150ms ease-in-out;
}

.base {
	width: 25px;
	height: 25px;
	background-color: #fff;
	rotate: 45deg;
	transform-origin: center;
	&.loaded {
		background-color: c.$highlight;
	}
	transition: background-color 150ms ease-in-out;
}

.base:nth-child(2) {
	margin-top: 25px;
}
</style>
