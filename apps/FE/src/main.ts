import Antd from 'ant-design-vue';
import AxiosInstance from '../plugins/axios';
import store from './store';
import routes from './routes';
import App from './App.vue';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

console.warn = () => {};

const app = createApp(App);

app.config.globalProperties.$axios = AxiosInstance;

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Register Ant Design Vue library & store
app.use(store);
app.use(router);
app.use(Antd);

app.mount('#app');
