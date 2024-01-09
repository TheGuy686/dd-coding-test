import { createApp } from 'vue';
import Antd from 'ant-design-vue';

import AxiosInstance from '../plugins/axios';

import App from './App.vue'; // Replace with your root component

const app = createApp(App);

app.config.globalProperties.$axios = AxiosInstance;

// Register Ant Design Vue library
app.use(Antd);

app.mount('#app'); // Mount the app to an element with id 'app'
