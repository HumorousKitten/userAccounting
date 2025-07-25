import { api } from '@/shared/api/axiosInstance';

export async function checkAuth() {
	const checkAuth = await api.get('/auth/me', {withCredentials: true})

	return checkAuth
}