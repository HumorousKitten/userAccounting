import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'

import { getUsers } from '../api/getUsers'

import { DeleteUser } from '@/features/deleteUser/ui/DeleteUser'
import { EditUser } from '@/features/editUser/ui/EditUser'
import { Stack } from '@mui/material'

import { useUserStore } from '@/entities/user/store/useUserStore'
import { current } from 'immer'

export function UserTable() {
	const {users, setUsers} = useUserStore()
	
	React.useEffect(() => {
		async function fetchData() {
			if(users.length) return

			const data = await getUsers()
	
			if (!data) return

			setUsers(data.data)
		}

		fetchData()
	}, [])

	return (
		<TableContainer component={Paper} sx={{minWidth: '450px', maxWidth: '60vw', marginInline: 'auto', mt: 3}}>
			<Table aria-label='users-table' size='small' >
				<TableHead>
					<TableRow>
						<TableCell>Действия</TableCell>
						<TableCell>ID</TableCell>
						<TableCell>Почта</TableCell>
						<TableCell>Имя</TableCell>
						<TableCell>Фамилия</TableCell>
						<TableCell>Занятость</TableCell>
						<TableCell>Соглашение</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.length
						? users.map(user => {
								return (
									<TableRow key={user.id}>
										<TableCell>
											<Stack direction={'row'}>
												<EditUser iconColor = 'black' user_id={user.id}/>
												{user.id !== '1' ? <DeleteUser iconColor = '#FF7F7F' user_id={user.id}/> : null}
											</Stack>
										</TableCell>
										<TableCell>{user.id}</TableCell>
										<TableCell>{user.email}</TableCell>
										<TableCell>{user.name}</TableCell>
										<TableCell>{user.surName}</TableCell>
										<TableCell>{user.employment ? user.employment : '-'}</TableCell>
										<TableCell>{user.userAgreement ? 'Есть' : 'Нет'}</TableCell>
									</TableRow>
								)
						  })
						: null}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

