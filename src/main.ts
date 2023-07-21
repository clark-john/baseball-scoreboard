import { createApp } from "vue";
import App from "./App.vue";
import { RouteRecordRaw, createWebHashHistory, createRouter } from "vue-router";
import { Icon } from "@vicons/utils";
import { createPinia } from "pinia";
import { ScoreboardStatePersist } from "./plugin";
import _ from "lodash";

if (import.meta.env.DEV) {
	window._ = _;
}

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("./pages/Index.vue")
	},
	{
		path: "/settings",
		component: () => import("./pages/Settings.vue")
	},
	{
		path: "/full",
		component: () => import("./pages/FullView.vue")
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

const pinia = createPinia();
pinia.use(ScoreboardStatePersist);

// prettier-ignore
createApp(App)
	.component("Icon", Icon)
	.use(router)
	.use(pinia)
	.mount("#app");
