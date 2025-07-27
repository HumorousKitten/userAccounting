import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

interface IEditUser {
	iconColor?: string
}

export function EditUser({iconColor = 'currentColor'}: IEditUser) {
	return (
		<IconButton>
			<EditIcon sx={{color: iconColor}}/>
		</IconButton>
	);
}

