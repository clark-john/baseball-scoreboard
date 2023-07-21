<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";

const defaultSettings = {
	homeTeam: "hom",
	awayTeam: "awy"
};

onBeforeMount(() => {
	if (!localStorage.getItem("settings")) {
		localStorage.setItem("settings", JSON.stringify(defaultSettings));
	}
});

const width = ref(document.body.clientWidth);

window.onresize = () => {
	width.value = document.body.clientWidth;
};
</script>

<template>
	<div>
		<router-view v-if="width > 800" />
		<div v-else>Only built for large screens sorry.</div>
	</div>
</template>

<style lang="scss">
@use "colors" as *;

// fonts
@import url("https://fonts.cdnfonts.com/css/franklin-gothic-demi-2");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	background-color: $main-bg;
	color: white;
}

body {
	margin: 0;
	padding: 0;
}

// center tag
.center {
	display: block;
	text-align: -webkit-center;
}

// control text
.control-text {
	font-size: 1.5rem;
}
</style>
