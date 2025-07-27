import { api } from '@/shared/api/axiosInstance';

export async function logout() {
	try {
		return await api.post('/auth/logout')
	} catch (error) {
		console.error(error)
	}
}