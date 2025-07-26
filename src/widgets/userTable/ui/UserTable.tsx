import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'

import { getUsers } from '../api/getUsers'

interface IUsers {
	id: string
	name: string
	surName: string
	fullName: string
	email: string
}

export function UserTable() {
	const [users, setUsers] = React.useState<IUsers[]>([])

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
			<Table aria-label='users-table'>
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
										<TableCell>Действие</TableCell>
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
