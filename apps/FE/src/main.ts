import { createApp } from 'vue';
import Antd from 'ant-design-vue';

import AxiosInstance from '../plugins/axios';
import store from './store';
import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$axios = AxiosInstance;

// Register Ant Design Vue library & store
app.use(store);
app.use(Antd);

app.mount('#app');
