import { api } from '@/shared/api/axiosInstance';

export async function getUsers() {
	try {
		const users = await api.get('/users', {withCredentials: true})
		return users
	} catch (error) {
		console.error('Ошибка в получении пользователей', error)
	}
}