import { api } from '@shared/api/axiosInstance'

export async function auth(email: string, password: string) {
	const data = await api.post('/auth/login', {
		email,
		password,
	})

	return data
}
