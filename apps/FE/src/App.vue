<style scoped>
#components-layout-demo-custom-trigger .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
	margin-left: 10px;
}

#components-layout-demo-custom-trigger .logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.3);
	margin: 16px;
}

.layout-header {
	background: #fff;
	padding: 0;
	padding-left: 10px;
}

.site-layout .site-layout-background {
	background: #fff;
}

.main-content {
	margin: '24px 16px';
	padding: '24px';
	background: '#fff';
	min-height: '280px';
}
</style>

<template>
<a-layout>

	<a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>

		<div class="logo" />

		<NaviMenu />

	</a-layout-sider>

	<a-layout>

		<a-layout-header class="layout-header">

			<menu-unfold-outlined
				class="trigger"
				@click="() => (collapsed = !collapsed)"
				v-if="collapsed"
			/>

			<menu-fold-outlined
				class="trigger"
				@click="() => (collapsed = !collapsed)"
				v-else
			/>

		</a-layout-header>

		<a-layout-content :class="main-content">

			<router-view></router-view>

		</a-layout-content>

	</a-layout>

</a-layout>
</template>

<script lang="ts">
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

import NaviMenu from './components/navi/menu.vue';

export default defineComponent({
	components: {
		UserOutlined,
		VideoCameraOutlined,
		UploadOutlined,
		MenuUnfoldOutlined,
		MenuFoldOutlined,
		NaviMenu,
	},
	setup() {
		return {
			selectedKeys: ref<string[]>(['1']),
			collapsed: ref<boolean>(false),
		};
	},
});
</script>
