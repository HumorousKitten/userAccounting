import { Header, Sidebar } from '@/widgets'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
	return (
		<Box sx={{ display: 'flex' }}>
			<Sidebar />
			<Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
				<Header />

				<Box component='main'>
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}
