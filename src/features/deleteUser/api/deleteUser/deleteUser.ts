import { api } from '@/shared/api/axiosInstance';

export async function deleteUser(id: string) {
	try {
		return await api.delete(`/users/${id}`, {withCredentials: true})
	} catch (error) {
		console.error(error)
	}
}