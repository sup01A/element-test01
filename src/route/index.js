import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path:'/',
        component: ()=> import('@/views/LoginAndRegister.vue')
    },
    {
        path: '/home',
        component: ()=> import('@/views/Home.vue')
    },
    {
        path: '/layout',
        component: ()=> import('@/views/Layout.vue'),
        children: [
            {path: '/article/category',component: ()=> import('@/views/article/ArticleCategory.vue')}
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes
});
export default router