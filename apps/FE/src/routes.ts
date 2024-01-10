import {
	UserOutlined,
	HomeOutlined,
	UploadOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons-vue';

import Home from './pages/home.vue';
import Creator from './pages/creator.vue';

export default [
	{
		key: 'home',
		title: 'Home',
		component: Home,
		path: '/',
		icon: HomeOutlined,
	},
	{
		key: 'creator',
		title: 'Creator',
		component: Creator,
		path: '/creator',
		icon: UserOutlined,
	},
];