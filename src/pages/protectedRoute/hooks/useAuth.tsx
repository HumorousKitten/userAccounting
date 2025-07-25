import React, { useEffect } from 'react'
import { checkAuth } from '../api/checkAuth.service'


export const useAuth = () => {
	const [isAuth, setIsAuth] = React.useState<boolean | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await checkAuth()
				if(data.statusText = 'OK')
					setIsAuth(true)
			}catch(error) {
				console.error('Ошибка запроса данных: ', error)
				setIsAuth(false)
			}
		}

		fetchData()
	}, [])

	return isAuth
}