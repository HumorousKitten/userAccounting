import type { HTMLAttributes, ReactNode } from 'react'

import { Link as RouterLink } from 'react-router-dom'

import { PersonAdd } from '@mui/icons-material'
import { Button } from '@mui/material'
import type { ButtonProps } from '@mui/material'


interface IAddUser  extends ButtonProps{}

export function AddUserNavigate({ children }: IAddUser) {
	return (
		<Button component={RouterLink} to={'/user/create'} startIcon={<PersonAdd sx={{width: 24, height: 24}}/>}
			sx={{textDecoration: 'none', color: 'currentcolor'}}
		>
			{children}
		</Button>
	)
}
