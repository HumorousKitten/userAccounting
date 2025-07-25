import { createBrowserRouter } from 'react-router-dom'

import { AuthPage } from '@/pages/authPage/ui/AuthPage'

import { ProtectedRoute } from '@/pages/protectedRoute/ProtectedRoute'

export const router = createBrowserRouter([
	{
		path: '/login',
		element: <AuthPage />,
	},

	{
		element: <ProtectedRoute />,
		children: [
			{
				path: '/',
				element: <div>Hello world!</div>,
			},
		],
	},
])
