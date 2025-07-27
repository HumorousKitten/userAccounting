import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { UserFormFields } from './userFormFields'

import { Link as RouterLink } from 'react-router-dom'

import type { SubmitHandler } from 'react-hook-form'
import type { IFormInput } from '../model/types'

import { createUser } from '../api/createUser'
import { useAddUserForm } from '../model/hooks/useAddUserForm'

import { closeIconStyle, formStyle, submitBtnStyle } from '../constants/styles'

import { useUserStore } from '@/entities/user/store/useUserStore'

export function AddUserForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useAddUserForm()

	const addUser = useUserStore(state => state.addUser)

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		if (data.password !== data.passwordConfirm) {
			setError('passwordConfirm', {
				type: 'passwordConfirm',
				message: 'Пароли не совпадают',
			})

			return
		}

		const { passwordConfirm, ...newData } = data

		const fetchData = await createUser({
			...newData,
			fullName: `${newData.name} ${newData.surName}`,
		})

		if (fetchData?.status === 201)
			addUser({
				...newData,
				fullName: `${newData.name} ${newData.surName}`,
				id: fetchData.data.id,
			})
	}

	return (
		<Box component='form' sx={formStyle} onSubmit={handleSubmit(onSubmit)}>
			<Typography component='h4' variant='h4' textAlign={'center'}>
				Создать пользователя
			</Typography>

			<Typography component='p' textAlign={'center'}>
				Используя react-hook-form
			</Typography>

			<IconButton sx={closeIconStyle} component={RouterLink} to={'/'}>
				<CloseIcon />
			</IconButton>

			<Stack paddingInline={10} spacing={1} mt={2}>
				<UserFormFields control={control} errors={errors} />

				<Button type='submit' sx={submitBtnStyle}>
					Создать пользователя
				</Button>
			</Stack>
		</Box>
	)
}
