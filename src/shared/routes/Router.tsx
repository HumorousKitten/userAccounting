import { createBrowserRouter } from 'react-router-dom'

import { AuthPage } from '@/pages/authPage/ui/AuthPage'

import { ProtectedRoute } from '@/pages/protectedRoute/ProtectedRoute'

import { MainLayout } from '@/app/mainLayout/MainLayout'

import { UsersPage } from '@/pages/usersPage/UsersPage'

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <AuthPage />,
	},

	{
		element: <ProtectedRoute />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: '/',
						element: <UsersPage />
					}
				]
			},
		],
	},
])
