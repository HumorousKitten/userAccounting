import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { UserFormFields } from './userFormFields'

import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom'

import type { SubmitHandler } from 'react-hook-form'
import type { IFormInput } from '../model/types'

import { getUserData, updateUserData } from '../api'

import { useEditUserForm } from '../model/hooks/useEditUserForm'

import { closeIconStyle, formStyle, submitBtnStyle } from '../constants/styles'

import { useUserStore } from '@/entities/user/store/useUserStore'

export function EditUserForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset
	} = useEditUserForm()
	const {id} = useParams()

	const navigate = useNavigate()

	const updateUser = useUserStore(state => state.updateUser)

	React.useEffect(() => {
		async function fetchData() {
			if(!id) return 
			const responce = await getUserData(id)
			
			if(responce?.status === 200)
				reset(responce.data)
		}

		fetchData()
	}, [])

	const onSubmit: SubmitHandler<IFormInput> = async data => {
		if(!id) return

		const newData = {
			name: data.name,
			surName: data.name,
			fullName: data.fullName,
			employment: data.employment,
			userAgreement: data.userAgreement,
		}


		const responce = await updateUserData(id, newData)

		if(responce?.status === 200){
			updateUser({
				id,
				email: data.email,
				name: data.name,
				surName: data.surName,
				fullName: data.fullName,
				employment: data.employment,
				userAgreement: data.userAgreement
			})

			navigate('/')
		}
	}

	return (
		<Box component='form' sx={formStyle} onSubmit={handleSubmit(onSubmit)}>
			<Typography component='h4' variant='h4' textAlign={'center'}>
				Редактировать пользователя
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
					Редактировать пользователя
				</Button>
			</Stack>
		</Box>
	)
}
