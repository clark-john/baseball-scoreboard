<script setup lang="ts">
const { name, score } = defineProps<{
	name: string;
	score: number;
}>();
</script>

<template>
	<div class="scorebox">
		<div class="name">{{ name }}</div>
		<div class="score">
			<div class="number">
				{{ score }}
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.scorebox {
	font-family: "Franklin Gothic Demi";
	.name {
		text-transform: uppercase;
		font-size: 3rem;
		text-align: center;
		margin-block: 1rem;
	}
	.score {
		font-weight: 500;
		font-size: 7rem;
		color: #000;
		position: relative;
		background-color: #fff;
		display: flex;
		width: 160px;
		height: 160px;
		justify-content: center;
		align-items: center;
	}
}
</style>
