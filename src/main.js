
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-persistedstate-plugin";
import 'element-plus/dist/index.css';
import '@/assets/main.css';

import RRR from "@/route/index.js";
import App from './App.vue';
const app = createApp(App);
const pinia = createPinia()
const persist = createPersistedState()
pinia.use(persist)
app.use(RRR);
app.use(ElementPlus);
app.use(pinia)
app.mount('#app');


