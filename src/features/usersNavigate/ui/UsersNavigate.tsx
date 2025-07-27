import { Link as RouterLink } from 'react-router-dom'

import GroupIcon from '@mui/icons-material/Group'
import { Button, type ButtonProps } from '@mui/material'

interface IUsersNavigate extends ButtonProps {}

export function UsersNavigate({ children }: IUsersNavigate) {
	return (
		<Button
			startIcon={<GroupIcon sx={{width: 24, height: 24}}/>}
			component={RouterLink}
			to={'/'}
			sx={{ textDecoration: 'none', color: 'currentcolor'}}
		>
			{children}
		</Button>
	)
}
