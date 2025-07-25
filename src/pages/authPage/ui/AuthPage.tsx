import { Container } from '@mui/material'

import { AuthForm } from '@/features/authForm/ui/AuthForm';

export function AuthPage() {
	return (
		<Container maxWidth='xs'>
			<AuthForm />
		</Container>
	);
}

