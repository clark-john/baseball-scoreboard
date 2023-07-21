import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import unplugin from "unplugin-vue-components/vite";
import checker from "vite-plugin-checker";

export default defineConfig({
	plugins: [
		vue(),
		unplugin(),
		checker({
			typescript: true
		})
	],
	resolve: {
		alias: [
			{
				find: "@styles",
				replacement: resolve(__dirname, "./src/styles")
			},
			{
				find: "@colors",
				replacement: resolve(__dirname, "./src/colors")
			},
			{
				find: "@utils",
				replacement: resolve(__dirname, "./src/utils")
			},
			{
				find: "@stores",
				replacement: resolve(__dirname, "./src/stores")
			}
		]
	}
});
