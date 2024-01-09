<template>
<div>

    <a-layout-header style="background: #fff; padding: 16px;">

		<h1>Welcome to Ant Design Page</h1>

		<a-button type="primary" @click="handleAdd">Create</a-button>

    </a-layout-header>

	<a-layout style="padding: 24px;">

		<a-table :columns="columns" :data-source="data">
				<template #headerCell="{ column }">

				<template v-if="column.key === 'name'">

					<span>

						<smile-outlined />

						Name

					</span>

				</template>

				</template>
			
				<template #bodyCell="{ column, record }">

				<template v-if="column.key === 'name'">

					<a>

						{{ record.name }}

					</a>

				</template>

				<template v-else-if="column.key === 'tags'">

					<span>

						<a-tag
							v-for="tag in record.tags"
							:key="tag"
							:color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
						>

							{{ tag.toUpperCase() }}

						</a-tag>

					</span>

				</template>

				<template v-else-if="column.key === 'action'">

					<span>

						<a>Invite 一 {{ record.name }}</a>

						<a-divider type="vertical" />

						<a>Delete</a>

						<a-divider type="vertical" />

						<a class="ant-dropdown-link">

							More actions

							<down-outlined />

						</a>

					</span>

				</template>

			</template>

		</a-table>

    </a-layout>

</div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
	data() {
		return {
			data: [
				{
					key: '1',
					name: 'John Brown',
					age: 32,
					address: 'New York No. 1 Lake Park',
					tags: ['nice', 'developer'],
				},
				{
					key: '2',
					name: 'Jim Green',
					age: 42,
					address: 'London No. 1 Lake Park',
					tags: ['loser'],
				},
				{
					key: '3',
					name: 'Joe Black',
					age: 32,
					address: 'Sidney No. 1 Lake Park',
					tags: ['cool', 'teacher'],
				},
			],
		};
	},
	computed: {
		columns() {
			return [
				{
					title: 'ID',
					dataIndex: 'id',
					key: 'id',
				},
				{
					title: 'Name',
					dataIndex: 'name',
					key: 'name',
				},
				{
					title: 'Action',
					key: 'action',
					slots: { customRender: 'action' },
				},
			];
		},
	},
	methods: {
		handleAdd() {
			console.log('Add button clicked');
			// Logic to handle adding an item
		},
		handleEdit(record) {
			console.log('Edit button clicked for', record);
			// Logic to handle editing an item
			alert('edit clicked');
		},
	},
};
</script>
