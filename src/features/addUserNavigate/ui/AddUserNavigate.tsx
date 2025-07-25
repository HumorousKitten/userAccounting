import type { ReactNode } from 'react'

import { PersonAdd } from '@mui/icons-material'
import { IconButton } from '@mui/material'

interface IAddUser {
	children?: ReactNode
}

export function AddUserNavigate({children}: IAddUser) {
	return (
		<IconButton>
			<PersonAdd />
			{children}
		</IconButton>
	)
}
