<template>
<div>

    <a-layout-header style="background: #fff; padding: 16px;">

		<a-row justify="space-between" align="middle">

			<a-col span="16" justify="center">

				<h1>

					Welcome to a Darkside Developments Technical Test by "Ryan J. Cooke"

				</h1>

			</a-col>

			<a-col span="8" justify="center" align="end">

				<a-button type="primary" @click="fetchCustomers()">

					Create

				</a-button>

			</a-col>

		</a-row>

    </a-layout-header>

	<a-layout style="padding: 24px;">

		<a-table :loading="doingRequest" :columns="columns" :data-source="customers">
			
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
import { mapState } from 'vuex';

export default {
	
	computed: {
		...mapState({
			doingRequest: (state) => state.doingRequest,
			customers: (state) => state?.customers ?? [],
		}),
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
	mounted() {
		setTimeout(async() => {
			await this.fetchCustomers();
		}, 200);
	},
	methods: {
		handleEdit(record) {
			console.log('Edit button clicked for', record);
			// Logic to handle editing an item
			alert('edit clicked');
		},
		async handleAdd() {
		},
		async fetchCustomers() {
			const res = await this.$store.dispatch('fetchCustomers');

			if (!res) {
				this.$notification.error({
					message: 'Operation error',
					description:
					'There was an error retrieving your customers.',
					duration: 500,
				});
			}
		},
	},
};
</script>
