import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons-vue';

import Home from './pages/home.vue';

export default [
	{
		key: 'home',
		title: 'Home',
		component: Home,
		path: '/',
		icon: UserOutlined,
	},
];