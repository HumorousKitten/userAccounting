import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/app/mainLayout/MainLayout'

import { AddUserPage, UsersPage, ProtectedRoute, AuthPage, EditUserPage } from '@/pages'

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
					}, 

					{
						path: '/user/create',
						element: <AddUserPage />
					},

					{
						path: '/user/edit/:id',
						element: <EditUserPage />
					}
				]
			},
		],
	},
])
