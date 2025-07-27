import { AppBar, Toolbar, Typography, Box  } from '@mui/material'
import { Logout } from '@/features/logout/ui/Logout'
import { useLocation } from 'react-router-dom'


export function Header() {
	const location = useLocation()

	return (
		<AppBar position='static' sx={{backgroundColor: '#ffffff', color: '#000000'}}>
			<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant='h4' component='h4'>
					{location.pathname.includes('create') ? 'Создание пользователя' : location.pathname.includes('edit') ? 'Редактирование пользователя' : 'Список пользователей'}
				</Typography>

				<Box>
					<Logout />
				</Box>
			</Toolbar>
		</AppBar>
	)
}
