import { api } from '@/shared/api/axiosInstance';

interface ICreateUserData {
	name: string,
	surName: string,
	email: string,
	password: string,
	fullName: string,
	userAgreement: boolean,
	employment: string
}

export async function createUser(data: ICreateUserData) {
	try {	
		return await api.post('/users', data, {
			withCredentials: true
		})
	} catch (error) {
		console.error(error)
	}
}