import {create} from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

import type { IUsers } from '@/shared/types'

interface IUserStore {
	users: IUsers[]
	addUser: (user: IUsers) => void
	setUsers: (users: IUsers[]) => void
	updateUser: (user: IUsers) => void
}


export const useUserStore = create<IUserStore>()(
	persist(

		immer((set, get) => ({
			users: [],

			addUser: (user) => set(state => {
				state.users.push(user)
			}),
			
			setUsers: (users) => set((state) => {
				state.users = users
			}),

			updateUser: (user) => set(state => {
				state.users = state.users.map(item => item.id === user.id ? user : item)
			})
		})),

		{
			name: 'usersTable',
			partialize: (state) => ({users: state.users})
		}
	)
)