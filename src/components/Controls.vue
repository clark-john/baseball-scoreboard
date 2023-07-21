<template>
	<div class="main">
		<div class="controls">
			<div class="text">Controls</div>
			<ControlBoard class="board" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@colors" as *;

.main {
	width: 100%;
	.controls {
		width: inherit;
		display: grid;
		justify-items: center;
		.text {
			font-size: 2rem;
			font-weight: 500;
			margin-top: 1rem;
			margin-bottom: 1.5rem;
		}
		.board {
			background-color: $controls-bg-color;
			width: 64%;
			border-radius: 10px;
			padding: 1.5rem;
		}
	}
}

$screens: (
	1397px: 90%,
	994px: 95%
);

@each $px in map.keys($screens) {
	@media only screen and (max-width: $px) {
		.main .controls .board {
			width: map.get($screens, $px);
		}
	}
}
</style>
