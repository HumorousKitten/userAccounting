import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

import { Link as RouteLink } from 'react-router-dom';

interface IEditUser {
	iconColor?: string
	user_id: string
}

export function EditUser({iconColor = 'currentColor', user_id}: IEditUser) {
	return (
		<IconButton component={RouteLink} to={`/user/edit/${user_id}`}>
			<EditIcon sx={{color: iconColor}}/>
		</IconButton>
	);
}

