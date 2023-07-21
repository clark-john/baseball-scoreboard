<script lang="ts" setup>
const { large = false } = defineProps<{
	large?: boolean;
}>();
</script>

<template>
	<div :class="large ? 'large' : ''">
		<FirstHalf />
		<SecondHalf />
	</div>
</template>

<style lang="scss" scoped>
@use "sass:map";

div {
	display: flex;
	column-gap: 200px;
	.large {
		column-gap: 300px;
	}
}

// for full display
// key: screen width, value: desired column-gap in pixels
$screensLarge: (
	1220px: 200px,
	1015px: 150px,
	941px: 100px,
	850px: 65px
);

// for main page
$screens: (
	1414px: 150px,
	1387px: 190px,
	1150px: 150px,
	916px: 90px
);

@mixin mediaScreen($px, $colGap, $sel) {
	@media only screen and (max-width: $px) {
		#{$sel} {
			column-gap: $colGap;
		}
	}
}

// full display
@each $px in map.keys($screensLarge) {
	@include mediaScreen($px, map.get($screensLarge, $px), "div.large");
}

// main page
@each $px in map.keys($screens) {
	@include mediaScreen($px, map.get($screens, $px), "div");
}
</style>
