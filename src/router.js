import {createRouter, createWebHistory} from "vue-router";
import HomePageView from "@/pages/HomePageView.vue";

const routes = [
    // 首页路由
    {path: '/', name: 'home', component: HomePageView,},
];

const router = createRouter({
    history: createWebHistory(), routes
});
export default router;