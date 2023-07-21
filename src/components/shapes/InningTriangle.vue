<script lang="ts" setup>
const { inverted } = defineProps<{ inverted?: boolean }>();
1;
</script>

<template>
	<div id="triangle" v-if="inverted"></div>
	<div id="inverted-triangle" v-else></div>
</template>

<style lang="scss" scoped>
@mixin triangle {
	width: 0;
	height: 0;
	border-style: solid;
	// generated from http://apps.eky.hk/css-triangle-generator/
	border-width: 0 15px 25px 15px;
	border-color: transparent transparent #fff transparent; // border-radius: 10px;
}

#triangle {
	@include triangle;
}
#inverted-triangle {
	@include triangle;
	border-width: 25px 15px 0 15px;
	border-color: #fff transparent transparent transparent;
}
</style>
