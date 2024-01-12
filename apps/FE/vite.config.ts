import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const env = (import.meta as any).env;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		host: '0.0.0.0',
    	port: 3000,
    },
})
