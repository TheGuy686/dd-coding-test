import { createStore } from 'vuex';
import axios from '../plugins/axios';

const newCustomerDefaults = {
	name: '', 
	email: '',
	phone: '', 
	addressLine1: '', 
	addressLine2: '', 
	postCode: '', 
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
		setCreateEditEntity(state, customer) {
			if (customer) {
				state.isEdit = true;
				state.entity = customer;
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
		createCustomer({ commit }, newCustomer) {
			try {
				commit('setIsDoingRequest', true);

				const res = axios.post('/customer', newCustomer);

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
		updateCustomer({ commit }, customer) {
			try {
				commit('setIsDoingRequest', true);

				const res = axios.put(`/customer/${customer.id}`, customer);

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
