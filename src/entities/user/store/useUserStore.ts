import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

import type { IUsers } from '@/shared/types'

interface IUserStore {
	users: IUsers[]
	addUser: (user: IUsers) => void
}


const useUserStore = create<IUserStore>()(
	persist(

		immer((set, get) => ({
			users: [],

			addUser: (user) => set(state => {
				state.users.push(user)
			}) 	

		})),

		{
			name: 'usersTable',
			partialize: (state) => ({users: state.users})
		}
	)
)