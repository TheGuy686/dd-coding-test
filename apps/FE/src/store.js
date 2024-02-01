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
		// --------- PAGINATION START ---------
		totalRecords: 1,
		currentPage: 1,
		totalPages: 0,
		// --------- PAGINATION END ---------
		
		lastError: '',
		doingRequest: false,
		customers: [],
		currentPage: 1,
		isEdit: false,
		entity: {},
	},
	getters: {},
	mutations: {
		// --------- PAGINATION START ---------
		setTotalRecords(state, total) { state.totalRecords = total },
		setCurrentPage(state, page) { state.currentPage = page },
		setTotalPages(state, total) { state.totalPages = total },
		// --------- PAGINATION END ---------

		setLastError(state, msg) { state.lastError = msg },
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
	},
	actions: {
		async fetchCustomers({ commit, state }) {
			try {
				commit('setIsDoingRequest', true);

				const response = await axios.get('/customer/all', {
					params: {
						page: state.currentPage,
					},
				});

				const body = response?.data;

				commit('setTotalRecords', body?.total ?? 0);
				commit('setTotalPages', body?.last_page ?? 0);
				commit('setCurrentPage', body?.current_page ?? 0);
				commit('setCustomers', body?.data ?? []);

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
		async createCustomer({ commit, state }) {			
			try {
				commit('setLastError', '');
				commit('setIsDoingRequest', true);

				await axios.post('/customer', state.entity);

				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);

				commit('setLastError', '');

				return true;
			}
			catch (err) {
				const msg = err.response?.data?.message;

				if (msg) commit('setLastError', msg);

				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
				return false;
			}
		},
		async updateCustomer({ commit, state }) {
			try {
				commit('setLastError', '');
				commit('setIsDoingRequest', true);

				await axios.put(`/customer/${state.entity.id}`, state.entity);

				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);

				commit('setLastError', '');

				return true;
			}
			catch (err) {
				const msg = err.response?.data?.message;

				if (msg) commit('setLastError', msg);

				// this makes the loading state change a little smoother
				setTimeout(() => commit('setIsDoingRequest', false), 300);
				return false;
			}
		},
	},
});

export default store;
