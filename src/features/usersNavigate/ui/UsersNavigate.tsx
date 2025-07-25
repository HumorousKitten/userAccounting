import type { ReactNode } from 'react'

import GroupIcon from '@mui/icons-material/Group';
import { IconButton } from '@mui/material'



interface IUsersNavigate {
	children: ReactNode
}

export function UsersNavigate({children}: IUsersNavigate) {
	return (
		<IconButton>
			<GroupIcon />
			{children}
		</IconButton>
	)
}

