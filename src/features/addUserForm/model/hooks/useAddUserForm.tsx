import { useForm } from 'react-hook-form'
import type { IFormInput } from '../types'

export const useAddUserForm = () => {
  return useForm<IFormInput>({
    defaultValues: {
      name: '',
      surName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      employment: '',
      userAgreement: false,
    },
  })
}