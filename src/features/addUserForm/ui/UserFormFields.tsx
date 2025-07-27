import {
	Checkbox,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import type { Control, FieldErrors } from 'react-hook-form'

import { ControlledField } from '@/shared/ui/controlledFormField/ControlledField'

import { errorStyle } from '../constants/styles'

import type { IFormInput } from '../model/types'

interface IUserFormFields {
	control: Control<IFormInput>
	errors: FieldErrors<IFormInput>
}

export function UserFormFields({ control, errors }: IUserFormFields) {
	return (
		<>
			<Stack direction={'row'} spacing={2}>
				<Stack flex={1}>
					<ControlledField<IFormInput>
						name='name'
						control={control}
						rules={{
							required: 'Поле не должно быть пустым',
							maxLength: {
								value: 64,
								message: 'Имя не должно превышать 64 символа',
							},
						}}
						renderFunc={({ field }) => (
							<TextField
								id='outlined-firstName'
								label='Имя *'
								variant='outlined'
								sx={{ flex: 1 }}
								{...field}
							/>
						)}
					/>
					{errors.name ? (
						<Typography component='p' sx={errorStyle.message}>
							{errors.name.message}
						</Typography>
					) : null}
				</Stack>

				<Stack flex={1}>
					<ControlledField<IFormInput>
						name='surName'
						control={control}
						rules={{
							required: 'Поле не должно быть пустым',
							maxLength: {
								value: 64,
								message: 'Имя не должно превышать 64 символа',
							},
						}}
						renderFunc={({ field }) => (
							<TextField
								id='outlined-lastName'
								label='Фамилия *'
								variant='outlined'
								{...field}
							/>
						)}
					/>
					{errors.surName ? (
						<Typography component='p' sx={errorStyle.message}>
							{errors.surName.message}
						</Typography>
					) : null}
				</Stack>
			</Stack>

			<ControlledField<IFormInput>
				name='email'
				control={control}
				rules={{
					required: 'Email обязателен',
					pattern: {
						value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
						message: 'Введите корректный email',
					},
				}}
				renderFunc={({ field }) => (
					<TextField
						id='outlined-email'
						label='Почта *'
						variant='outlined'
						type={'email'}
						{...field}
					/>
				)}
			/>
			{errors.email ? (
				<Typography component='p' sx={errorStyle.message}>
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
						label='Пароль *'
						variant='outlined'
						type={'password'}
						{...field}
					/>
				)}
			/>
			{errors.password ? (
				<Typography component='p' sx={errorStyle.message}>
					{errors.password.message}
				</Typography>
			) : null}

			<ControlledField<IFormInput>
				name='passwordConfirm'
				control={control}
				rules={{ required: 'Поле не должно быть пустым' }}
				renderFunc={({ field }) => (
					<TextField
						id='outlined-passwordConfirm'
						label='Подтверждение пароля *'
						variant='outlined'
						type={'password'}
						{...field}
					/>
				)}
			/>
			{errors.passwordConfirm ? (
				<Typography component='p' sx={errorStyle.message}>
					{errors.passwordConfirm.message}
				</Typography>
			) : null}

			<ControlledField<IFormInput>
				name='employment'
				control={control}
				renderFunc={({ field }) => (
					<FormControl fullWidth>
						<InputLabel id='employment-label'>Занятость</InputLabel>
						<Select
							labelId='employment-label'
							id='employment-select'
							label='Занятость'
							{...field}
							value={field.value || ''}
						>
							<MenuItem value='full'>Полная</MenuItem>
							<MenuItem value='part'>Частичная</MenuItem>
							<MenuItem value='none'>Безработный</MenuItem>
						</Select>
					</FormControl>
				)}
			/>

			<ControlledField<IFormInput>
				name='userAgreement'
				control={control}
				rules={{ required: false }}
				renderFunc={({ field }) => (
					<FormControlLabel
						control={<Checkbox />}
						label='Пользовательское соглашение'
						{...field}
					/>
				)}
			/>
		</>
	)
}
