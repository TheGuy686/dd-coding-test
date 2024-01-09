import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:100/api' });

export default axiosInstance;