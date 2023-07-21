<script lang="ts" setup>
import { useBases } from "@stores";
import { storeToRefs } from "pinia";

const store = useBases();
const { loadBase, clearBases } = store;
const { bases } = storeToRefs(store);
</script>

<template>
	<div class="main">
		<div class="control-text">Bases</div>
		<div class="bases-main">
			<div class="bases">
				<button @click="loadBase(1)">
					{{ bases.first ? "Unload" : "Load" }} 1st
				</button>
				<button @click="loadBase(2)">
					{{ bases.second ? "Unload" : "Load" }} 2nd
				</button>
				<button @click="loadBase(3)">
					{{ bases.third ? "Unload" : "Load" }} 3rd
				</button>
			</div>
			<button @click="clearBases">Clear Bases</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "@styles/button" as *;

button {
	@include normalButton;
}

.main {
	display: grid;
	justify-items: center;
	.control-text {
		margin-bottom: 7px;
	}
	.bases-main {
		row-gap: 8px;
		.bases {
			display: flex;
			column-gap: 10px;
		}
		display: inherit;
		button {
			justify-self: center;
			max-width: 90px;
			width: 60%;
		}
	}
}
</style>
