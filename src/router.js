import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import BattlePage from "./views/BattlePage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/battle", component: BattlePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
