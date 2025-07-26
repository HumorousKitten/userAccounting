import { AppBar, Toolbar, Typography } from '@mui/material'

export function Header() {
	return (
		<AppBar position='static' sx={{backgroundColor: '#ffffff', color: '#000000'}}>
			<Toolbar>
				<Typography variant='h4' component='h4'>
					Header
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
