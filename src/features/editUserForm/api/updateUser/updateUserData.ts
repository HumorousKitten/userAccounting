import { api } from '@/shared/api/axiosInstance';
import type { IUsers } from '@/shared/types'

export async function updateUserData(id: string, data: Omit<IUsers, 'id' | 'email'>) {
	try {
		return await api.patch(`/users/${id}`, data, {withCredentials: true})
	} catch (error) {
		console.error(error)
	}
}