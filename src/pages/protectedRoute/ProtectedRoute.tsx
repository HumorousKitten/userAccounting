import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from './hooks/useAuth'


export function ProtectedRoute() {
	const isAuth = useAuth()




	if(isAuth === null)
		return <div>Loading...</div>

	return !isAuth ? <Navigate to={'/login'} replace /> : <Outlet />
}
