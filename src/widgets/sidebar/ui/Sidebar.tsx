import React from 'react'

import { ChevronLeft, Menu as MenuIcon } from '@mui/icons-material'
import { Box, Drawer, IconButton, Typography } from '@mui/material'

import { AddUserNavigate } from '@/features/addUserNavigate/ui/AddUserNavigate'
import { UsersNavigate } from '@/features/usersNavigate/ui/UsersNavigate'

import { drawerWidth, collapsedWidth } from '../constants'

export function Sidebar() {
	const [open, setOpen] = React.useState(false)

	const toggleDrawer = () => setOpen(!open)

	return (
		<Drawer
			variant='permanent'
			sx={{
				width: open ? drawerWidth : collapsedWidth,
				flexShrink: 0,
				whiteSpace: 'nowrap',
				boxSizing: 'border-box',
				transition: 'width 0.3s',
				'& .MuiDrawer-paper': {
					width: open ? drawerWidth : collapsedWidth,
					transition: 'width 0.3s',
					overflowX: 'hidden',
				},
			}}
		>
			<Box display='flex' justifyContent={open ? 'flex-end' : 'center'} p={1}>
				<IconButton onClick={toggleDrawer}>
					{open ? <ChevronLeft /> : <MenuIcon />}
				</IconButton>
			</Box>

			<Box display='flex' justifyContent={'center'} alignItems={'center'}> 
        <UsersNavigate>
          {open ? <Typography ml={1}>Пользователи</Typography> : null}
        </UsersNavigate>
			</Box>
			
			<Box display='flex' justifyContent={'center'} alignItems={'center'}> 
        <AddUserNavigate>
          {open ? <Typography ml={1}>Добавить пользователя</Typography> : null}
        </AddUserNavigate>
			</Box>

		</Drawer>
	)
}


//TODo - добавить header
//разместить их в layout и сверстать правильно