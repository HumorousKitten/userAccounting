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

//ToDo: сделать форму добавления пользователя (без логики)
// сделать форму редактирования пользователя (без логики)
// добавить store пользователей в  entities
// добавить логику в форму добавления пользователя
// добавить логику в форму редактирования пользователя


interface IUsers {
	id: string
	name: string
	surName: string
	fullName: string
	email: string
}

export function UserTable() {
	const [users, setUsers] = React.useState<IUsers[]>([])

	//запрашивать пользователей из  store
	//получать пользователей из базы данных только в первый раз при монтировании компонента, следовательно и заполнять state полностью в первый раз
	// след разы будет ререндер от изменения самого стора, когда мы будем редактировать, добавлять или удалять пользователя

	React.useEffect(() => {
		async function fetchData() {
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
					</TableRow>
				</TableHead>

				<TableBody>
					{users.length
						? users.map(user => {
								return (
									<TableRow key={user.id}>
										<TableCell>
											<Stack direction={'row'}>
												<EditUser />
												<DeleteUser />
											</Stack>
										</TableCell>
										<TableCell>{user.id}</TableCell>
										<TableCell>{user.email}</TableCell>
										<TableCell>{user.name}</TableCell>
										<TableCell>{user.surName}</TableCell>
									</TableRow>
								)
						  })
						: null}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

