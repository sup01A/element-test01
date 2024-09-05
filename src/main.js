
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-persistedstate-plugin";
import 'element-plus/dist/index.css';
import '@/assets/main.css';
import zhCn from 'element-plus/dist/locale/zh-cn.min.js'
import router from "@/route/index.js";
import App from './App.vue';
const app = createApp(App);
const pinia = createPinia()
const persist = createPersistedState()
pinia.use(persist)
app.use(router);
app.use(ElementPlus,{
    locale: zhCn
});
app.use(pinia)
app.mount('#app');


