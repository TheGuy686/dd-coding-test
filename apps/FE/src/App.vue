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

		<a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">

			<a-menu-item key="1">

				<user-outlined />

				<span>nav 1</span>

			</a-menu-item>

			<a-menu-item key="2">

				<video-camera-outlined />

				<span>nav 2</span>

			</a-menu-item>

			<a-menu-item key="3">

				<upload-outlined />

				<span>nav 3</span>

			</a-menu-item>

		</a-menu>

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

export default defineComponent({
	components: {
		UserOutlined,
		VideoCameraOutlined,
		UploadOutlined,
		MenuUnfoldOutlined,
		MenuFoldOutlined,
	},
	setup() {
		return {
			selectedKeys: ref<string[]>(['1']),
			collapsed: ref<boolean>(false),
		};
	},
});
</script>
