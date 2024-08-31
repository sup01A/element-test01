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
            {path: '/article/category',component: ()=> import('@/views/article/ArticleCategory.vue')},
            {path: '/article/manage',component: ()=> import('@/views/article/ArticleManage.vue')},
            {path: '/user/info',component: ()=> import('@/views/user/UserInfo.vue')},
            {path: '/user/avatar',component: ()=> import('@/views/user/UserAvatar.vue')},
            {path: '/user/resetpassword',component: ()=> import('@/views/user/UserResetPassword.vue')},
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes
});
export default router