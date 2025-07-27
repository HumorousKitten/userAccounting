import { useForm } from 'react-hook-form'
import type { IFormInput } from '../types'

export const useEditUserForm = () => {
  return useForm<IFormInput>({
    defaultValues: {
      name: '',
      surName: '',
      email: '',
      employment: '',
      userAgreement: false,
      fullName: ''
    },
  })
}