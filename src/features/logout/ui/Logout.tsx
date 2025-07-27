import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export function Logout() {
	return (
		<Button startIcon={<LogoutIcon />} sx={{color: 'ActiveBorder'}}>Выйти</Button>
	);
}
