import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@features': path.resolve(__dirname, './src/features'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@pages': path.resolve(__dirname, './src/pages'),
		},
	},

	server: {
		allowedHosts: ['localhost'],
		port: 5173,
		strictPort: true,
		proxy: {
			'/api': {
				target: 'http://localhost:4000',
				changeOrigin: true,
				secure: false,
			},
		},
	},

	plugins: [react()],
})
