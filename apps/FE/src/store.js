import { createStore } from 'vuex';
import axios from '../plugins/axios';

const store = createStore({
	state: {
		doingRequeset: false,
		customers: [],
		currentPage: 1,
	},
	getters: {},
	mutations: {
		setIsDoingRequest(state, requestState) {
			state.doingRequeset = !!requestState;
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

				commit('setIsDoingRequest', false);

				return true;
            }
            catch (err) {
				commit('setIsDoingRequest', false);
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

				commit('setIsDoingRequest', false);
			}
			catch (err) {
				commit('setIsDoingRequest', false);
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

				commit('setIsDoingRequest', false);
			}
			catch (err) {
				commit('setIsDoingRequest', false);
				return false;
			}
		},
	},
});

export default store;
