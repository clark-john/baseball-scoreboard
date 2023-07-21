<script setup lang="ts">
const margin = defineProps<{
	margin: string;
}>();
</script>

<template>
	<div :style="margin">
		<slot />
	</div>
</template>
