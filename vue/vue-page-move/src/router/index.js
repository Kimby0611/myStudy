import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import NextPage from "@/components/NextPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/next", component: NextPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
