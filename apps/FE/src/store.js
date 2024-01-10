import { createStore } from 'vuex';
import axios from '../plugins/axios';

const newCustomerDefaults = {
	name: 'Ryan Cooke', 
	email: 'ryanjcooke@hotmail.com',
	phone: '09876859', 
	addressLine1: 'Add Line 1', 
	addressLine2: 'Add line 2', 
	postCode: 'WF15 8jg', 
};

const store = createStore({
	state: {
		doingRequest: false,
		customers: [],
		currentPage: 1,
		isEdit: false,
		entity: {},
	},
	getters: {},
	mutations: {
		setIsEdit(state, isEdit) { state.isEdit = isEdit },
		setEntityProp(state, params) {
			state.entity[params.key] = params.value;
		},
		setCreateEditEntity(state, customer) {
			if (customer) {
				state.isEdit = true;
				state.entity = {...customer};
			}
			else {
				state.isEdit = false;
				state.entity = {...newCustomerDefaults};
			}
		},
		setIsDoingRequest(state, requestState) {
			state.doingRequest = !!requestState;
		},
		setCustomers(state, customers) {
			state.customers = customers;
		},
		setCurrentPage(state, page) {
			state.currentPage = page;
		},
		addCustomer(state, customer) {
			state.customers.push(customer);
		},
		updateCustomer(state, customer) {
			const index = state.customers.findIndex(
				(customer) => customer.id === customer.id
			);

			if (index !== -1) {
				state.customers.splice(index, 1, customer);
			}
		},
	},
	actions: {
		async fetchCustomers({ commit, state }, successCb) {
			try {
				commit('setIsDoingRequest', true);

                const response = await axios.get('/customer/all', {
					params: {
						page: 1,
					},
				});

				commit('setCustomers', response?.data?.data ?? []);

				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);

				return true;
            }
            catch (err) {
				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
				return false;
			}
		},
		createCustomer({ commit }) {
			try {
				commit('setIsDoingRequest', true);

				const res = axios.post('/customer', state.entity);

				const cus = res?.data;

				if (typeof cus == 'object' && Object.keys(cus).length > 0) {
					commit('addCustomer', cus);
				}

				c// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
			}
			catch (err) {
				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
				return false;
			}
		},
		updateCustomer({ commit }) {
			try {
				commit('setIsDoingRequest', true);

				const res = axios.put(`/customer/${state.entity.id}`, state.entity);

				const cus = res?.data;

				if (typeof cus == 'object' && Object.keys(cus).length > 0) {
					commit('updateCustomer', cus);
				}

				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
			}
			catch (err) {
				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
				return false;
			}
		},
	},
});

export default store;
