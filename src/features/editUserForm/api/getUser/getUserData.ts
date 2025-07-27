import { api } from '@/shared/api/axiosInstance';

export async function getUserData(id: string) {
	try {
		return await api.get(`/users/${id}`, {withCredentials: true})
	} catch (error) {
		console.error(error)
	}
}