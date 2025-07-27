import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

interface IDeleteUser {
	iconColor?: string
}

export function DeleteUser({iconColor = 'currentColor'}: IDeleteUser) {
	return (
		<IconButton>
			<DeleteIcon sx={{color: iconColor}}/>
		</IconButton>
	);
}

