import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { logout } from '../api';
import { useNavigate } from 'react-router-dom'

export function Logout() {
	const navigate = useNavigate()

	async function handleExitClick(e: React.MouseEvent) {
		e.preventDefault()
		const data = await logout() 

		if(!data) return

		if(data.status === 201)
			navigate('/login')
	}

	return (
		<Button startIcon={<LogoutIcon />} sx={{color: 'ActiveBorder'}} onClick={handleExitClick}>Выйти</Button>
	);
}
