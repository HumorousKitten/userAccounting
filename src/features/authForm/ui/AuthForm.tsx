import { useForm } from 'react-hook-form'

import type { SubmitHandler } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { Box, Button, TextField, Typography } from '@mui/material'

import { ControlledField } from '@/shared/ui/controlledFormField/ControlledField'

import { auth } from '../api/auth.service'

import {
	authTitle,
	errorStyle,
	formStyle,
	submitBtnStyle,
} from '../constants/styles'

interface IFormInput {
	email: string
	password: string
}

export function AuthForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const navigate = useNavigate()

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		const authData = await auth(data.email, data.password)
		if (authData.data.message === 'Login successful') 
			navigate('/')
	}

	return (	
		<Box component='form' sx={formStyle} onSubmit={handleSubmit(onSubmit)}>
			<Typography component='h4' sx={authTitle}>
				Авторизация
			</Typography>

			<ControlledField<IFormInput>
				name='email'
				control={control}
				rules={{ required: 'Поле не должно быть пустым' }}
				renderFunc={({ field }) => (
					<TextField
						id='outlined-login'
						label='Email *'
						variant='outlined'
						type='email'
						{...field}
					/>
				)}
			/>
			{errors.email ? (
				<Typography sx={errorStyle.message} component='p'>
					{errors.email.message}
				</Typography>
			) : null}

			<ControlledField<IFormInput>
				name='password'
				control={control}
				rules={{ required: 'Поле не должно быть пустым' }}
				renderFunc={({ field }) => (
					<TextField
						id='outlined-password'
						label='Password *'
						variant='outlined'
						type='password'
						{...field}
					/>
				)}
			/>
			{errors.password ? (
				<Typography sx={errorStyle.message} component='p'>
					{errors.password.message}
				</Typography>
			) : null}

			<Button type={'submit'} sx={submitBtnStyle}>
				Авторизация
			</Button>
		</Box>
	)
}
