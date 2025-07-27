import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import { deleteUser } from '../api';

import { useUserStore } from '@/entities/user/store/useUserStore';

interface IDeleteUser {
	iconColor?: string
	user_id: string
}

export function DeleteUser({iconColor = 'currentColor', user_id}: IDeleteUser) {
	const deleteUserState = useUserStore(state => state.deleteUser)

	async function handleClickDelete(e: React.MouseEvent) {
		e.preventDefault()
		const fetchData = await deleteUser(user_id)
		if(!fetchData) return

		if(fetchData.status === 200)
			deleteUserState(user_id)
	}

	return (
		<IconButton onClick={handleClickDelete}>
			<DeleteIcon sx={{color: iconColor}}/>
		</IconButton>
	);
}

