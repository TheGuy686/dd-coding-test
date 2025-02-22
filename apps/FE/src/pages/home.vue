<template>
	<div>
		<a-layout style="padding: 10px 10px 24px 24px;">
	
			<page-header 
				title='Welcome to a Darkside Developments Technical Test by "Ryan J. Cooke"'
				right-btn-text="Create"
				@right-btn-clicked="$refs['ed-mdl'].show()"
			/>

			<a-table
				:loading="doingRequest"
				:columns="columns"
				:data-source="customers"
				:pagination="{
					current: currentPage,
					pageSize: 10,
					total: totalRecords,
					onChange: handlePageChange,
				}"
			>
				<template #headerCell="{ column }">
	
					<template v-if="column.title == 'Actions'">
	
						<a-col align="end">
	
							<span>Actions</span>
	
						</a-col>
	
					</template>
	
					<a-row v-else>	
	
						<a-col justify="end">
	
							<span>
	
								{{ column.title }}
		
							</span>
	
						</a-col>
	
					</a-row>
	
				</template>
	
				<template #name="{ text }">
					
					{{ text }}
				
				</template>
	
				<template v-slot:address="record">
	
					{{ record.record.addressLine1 }}, {{ record.record.addressLine2 }}, {{ record.record.postCode }}
	
				</template>
	
				<template v-slot:actions="record">
	
					<a-row align="end">
	
						<a-button type="default" size="small" @click="$refs['ed-mdl'].show(record.record)">
	
							<template #icon>
								
								<UserOutlined />
							
							</template>
	
						</a-button>
	
					</a-row>
	
				</template>
	
			</a-table>
	
		</a-layout>
	
		<ce-modal ref="ed-mdl" />
	
	</div>
	</template>
	
	<script>
	import { ref, computed } from 'vue';
	import { mapState, mapMutations } from 'vuex';
	
	import PageHeader from '../components/page-header.vue';
	import Modal from '../components/content/create-edit-customer-modal.vue';
	
	import { UserOutlined } from '@ant-design/icons-vue';
	
	export default {
		components: {
			UserOutlined,
			PageHeader,
			'ce-modal': Modal,
		},
		watch: {
			async currentPage(to) {
				await this.fetchCustomers();
			},
		},
		computed: {
			...mapState({
				doingRequest: (state) => state.doingRequest,
				customers: (state) => state?.customers ?? [],
				currentPage: (state) => state.currentPage,
				totalPages: (state) => state.totalPages,
				totalRecords: (state) => state.totalRecords,
			}),
		},
		data() {
			return {
				columns: [
					{
						title: 'ID',
						dataIndex: 'id',
						key: 'id',
					},
					{
						title: 'Name',
						dataIndex: 'name',
						sorter: true,
						width: '20%',
						slots: { customRender: 'name' },
					},
					{
						title: 'Address',
						dataIndex: 'addressLine1',
						slots: { customRender: 'address' },
					},
					{
						title: 'Actions',
						dataIndex: 'addressLine1',
						width: '20%',
						slots: { customRender: 'actions' },
					},
				]
			};
		},
		mounted() {
			setTimeout(async() => {
				await this.fetchCustomers();
			}, 200);
		},
		methods: {
			handlePageChange(pageNumber) {
				this.setCurrentPage(pageNumber);
			},
			async fetchCustomers() {
				const res = await this.$store.dispatch('fetchCustomers');
	
				if (!res) {
					this.$notification.error({
						message: 'Operation error',
						description:
						'There was an error retrieving your customers.',
						duration: 2,
					});
				}
			},
	
			...mapMutations({ setCurrentPage: 'setCurrentPage' }),
		},
	};
	</script>
	