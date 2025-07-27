import { AppBar, Toolbar, Typography, Box  } from '@mui/material'
import { Logout } from '@/features/logout/ui/Logout'


export function Header() {
	

	return (
		<AppBar position='static' sx={{backgroundColor: '#ffffff', color: '#000000'}}>
			<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Typography variant='h4' component='h4'>
					Header
				</Typography>

				<Box>
					<Logout />
				</Box>
			</Toolbar>
		</AppBar>
	)
}
