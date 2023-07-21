<script lang="ts" setup></script>

<template>
	<div class="board">
		<div class="first-group">
			<TeamScores />
			<div class="divider"></div>
			<Inning />
			<div class="divider"></div>
			<Outs />
			<div class="divider"></div>
			<Bases />
		</div>
		<div class="second-group">
			<BallAndStrike />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

button {
	@include normalButton;
}

.text {
	font-size: 1.5rem;
}

.board {
	display: grid;
	justify-items: center;
	row-gap: 1.5rem;
	.first-group {
		display: flex;
		width: 100%;
		justify-content: center;
	}
}

.divider {
	min-width: 2px;
	width: 2px;
	background-color: #00000030;
	margin-inline: 2rem;
}
</style>
